import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router'; 
import { MatRadioChange } from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
declare var $
declare var jsPDF: any; 

export interface TestCatalogue {
	category: string;
	name: string;
	rate: number;
	discount: number;
}

@Component({
	selector: 'app-test-catalogue',
	templateUrl: './test-catalogue.component.html',
	styleUrls: ['./test-catalogue.component.css'],
	providers: [UserService]
})


export class TestCatalogueComponent implements OnInit {
	array
	array1
	//sortedData:TestCatalogue[]
	sortedData
	headerClicked: number
	optionValue
	totalRate: number
	detailsForm:FormGroup
	editcategory
	edittestname
	editrate
	editdiscount
	diagnosticsData
	id
	testNameSuggestion
	loading
	constructor(private UserService : UserService,private toastr: ToastrService, public dialog: MatDialog, private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails'])
		this.optionValue='All'
		this.totalRate=0
		this.sortedData = []
		this.array=[]
		this.array1 = []
		this.testNameSuggestion = []
		this.detailsForm = this.formBuilder.group({
            'category':  [null, Validators.compose([Validators.required,])],
            'discount': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(0),Validators.maxLength(3), Validators.min(0), Validators.max(100)])],
            'rate':  [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*')])],
            'testName': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],

        })
		this.getArrayValue()		
	}

	getArrayValue(){
        this.loading = true
		this.UserService.GetTestBySmartDiagnostics(this.diagnosticsData.dataSmartDiagnostics._id).subscribe(data => {
            console.log(data)
			this.loading = false
            if (data.response == true) {
            	this.array = data.data
            	this.array1 = data.data
				for (var i = 0; i < this.array.length; i++) {
					var total=0
					total += (this.array[i].rate/100)*this.array[i].discount
					this.totalRate+=this.array[i].rate-total
				}		
				this.sortedData = this.array.slice(); 		
                // this.toastr.success(data.message,"Success")
            } else{
                this.toastr.error(data.message,"Error")
            }      
        }, err => {
          console.log(err);
        })
	}
	getTableHeaderClass(id){
		if(this.headerClicked == id){
			return 'selected'
		}else{
			return ''
		}
	}

	setTableHeaderClass(id){
		this.headerClicked = id
	}

	sortData(sort: Sort) {
		const data = this.sortedData.slice();
		if (!sort.active || sort.direction === '') {
			this.sortedData = data;
			return;
		}

		this.sortedData = data.sort((a, b) => {
			const isAsc = sort.direction === 'asc';
			switch (sort.active) {
				case 'category': return compare(a.category, b.category, isAsc);
				case 'testname': return compare(a.name, b.name, isAsc);
				case 'rate': return compare(a.rate, b.rate, isAsc);
				case 'discount': return compare(a.discount, b.discount, isAsc);
				default: return 0;
			}
		});
	}
	exportPdf(){
		var head = [
		{ title: '#', dataKey: "id"},
		{ title: 'Category', dataKey: "category"},
		{ title: 'Test Name', dataKey: "testname"},
		{ title: 'Rate', dataKey: "rate"},
		{ title: 'Discount', dataKey:"discount"},
		]
		var csvData = []
		var totalDuration
		var dates = []
		for (var i = 0; i < this.sortedData.length; i++) {
			var ob ;
			ob = {}
			ob.id = i+1
			ob.category = this.sortedData[i].category
			ob.testname = this.sortedData[i].name
			ob.rate = this.sortedData[i].rate 
			ob.discount = this.sortedData[i].discount
			csvData.push(ob)
		}

		var date = new Date().toJSON().toString().substr(0,10)
		var doc = new jsPDF('p', 'pt');
		doc.autoTable(head, csvData, {
			theme: 'grid',
			styles: {
				overflow: 'linebreak',
			},
			margin: 5,
			fontSize:8,
			tableWidth: 'auto',
			showHeader: 'everyPage'
		});
		doc.save('Test Catalogue'+"("+date+")");
	}

	selectOne(){
		this.sortedData=[]
		this.totalRate=0
		var total=0
		if(this.optionValue=='All'){
			this.array = this.array1
		}else{
			this.array = this.array1.filter(d=>d.category == this.optionValue)
		}
		for (var i = 0; i < this.array.length; i++) {
			total += (this.array[i].rate/100)*this.array[i].discount
			this.totalRate+=this.array[i].rate-total
			this.sortedData = this.array.slice(); 	
		}
	}

	DeleteTest(activity){
        let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            // width: '250px',
            data: activity.name
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                this.loading = true
                this.UserService.DeleteTestBySmartDiagnostics(activity.id).subscribe(data => {
                    console.log(data);
                    this.loading = false
                    if (data.response == true) {
                        this.toastr.success(data.message, "Success");   
                        this.ngOnInit()
                    } else {
                        this.toastr.error(data.message, "Error");
                    }
                }, err => {
                    console.log(err);
                })
            } else {
                console.log("error or No Thanks button clicked")
            }
        });
    }

    editTest(item){
    	console.log(item)
    	this.id = item.id
    	this.editcategory = item.category
    	this.edittestname = item.name
    	this.editrate = item.rate
    	this.editdiscount = item.discount
    	$("#edit-entry").modal("show");
    }

    UpdateTest(){
    	let object = {
    		id: this.id,
    		update:{
	            category: this.editcategory,
	            name: this.edittestname,
	            rate: this.editrate,
	            discount: this.editdiscount
    		}
        }
        this.loading = true
    	this.UserService.UpdateTestBySmartDiagnostics(object).subscribe(data => {
            console.log(data)
        	this.loading = false
            if (data.response == true) {
            	$("#edit-entry").modal("hide");
            	this.detailsForm.reset()
            	this.ngOnInit()	
                this.toastr.success(data.message,"Success")
            } else{
                this.toastr.error(data.message,"Error")
            }      
        }, err => {
          console.log(err);
        })
    }

    onTextChange(type, suggestion) {
        var type
        if (type == 'PATHOLOGY') {
            type = 'Pathology'
        } else if (type == 'ULTRASOUND') {
            type = 'Ultrasound'
        } else if (type == 'AUDIOMETRY') {
            type = 'Audiometry'
        } else if (type == 'BONE DENSITOMETRY') {
            type = 'Bone densitometry'
        } else if (type == 'DOPPLER STUDIES') {
            type = 'Doppler Studies'
        } else if (type == 'MAMMOGRAPHY') {
            type = 'Mammograaphy'
        } else if (type == 'UROFLOWMETRY') {
            type = 'Uroflowmetry'
        } else if (type == 'Nerve Test') {
            type = 'NERVE TEST'
        } else if (type == 'Eye Tests') {
            type = 'Eye Test'
        }
        this.testNameSuggestion = []
        var object = {
            type: type,
            suggestion: suggestion
        }        
        this.UserService.SearchSuggestion(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.testNameSuggestion = data.data
            }
        }, err => {
            console.log(err);
        })
    }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

