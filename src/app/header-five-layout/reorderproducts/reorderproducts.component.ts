import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router'; 
import { MatRadioChange } from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
declare var jsPDF: any; // Important

export interface ExpiryBookArray {
    product: string;
    type: string;
    batch: string;
    current_stock: number;
    pack_units: number
    pack_quantity: number
}

@Component({
	selector: 'app-reorderproducts',
	templateUrl: './reorderproducts.component.html',
	styleUrls: ['./reorderproducts.component.css'],
	providers: [UserService]

})
export class ReorderproductsComponent implements OnInit {
	reorderArray
	pharmacyData
	todayDate= new Date()
	headerClicked
	orderQty
	newTentativeCost
    searchInput
    searchArray
    sortedData
    loading
	constructor(private UserService : UserService,private toastr: ToastrService,public dialog: MatDialog) { }

	ngOnInit() {
		this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
		this.reorderArray = []
		this.orderQty = []
        this.searchArray=[]
        this.sortedData=[]
        this.newTentativeCost = 0
        this.GetReorderProducts()
	}
	GetReorderProducts(){
		this.UserService.GetReorderProducts(this.pharmacyData.dataSmartPharmacy._id).subscribe(data => {
			console.log(data);
			if (data.response == true) {
                this.sortedData = this.searchArray.slice();         
                // this.toastr.success(data.message, "Success")
                for (var i = 0; i < data.data.length; i++) {
                    for (var j = 0; j < data.data[i].length; j++) {
                        data.data[i][j].newPacking = Math.trunc(data.data[i][j].current_stock /(data.data[i][j].pack_units*data.data[i][j].pack_quantity))
                        data.data[i][j].newPackingReminder = data.data[i][j].current_stock %(data.data[i][j].pack_units*data.data[i][j].pack_quantity)
                        data.data[i][j].tent_amount = 0
                        this.reorderArray.push(data.data[i][j])                        
                        this.searchArray.push(data.data[i][j])                        
                        this.orderQty.push("")
                    }
                }
			}else{
                this.toastr.error(data.message, "Error")
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
        const data = this.reorderArray.slice();
        if (!sort.active || sort.direction === '') {
            this.reorderArray = data;
            return;
        }

        this.reorderArray = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'product': return compare(a.product, b.product, isAsc);
                case 'type': return compare(a.type, b.type, isAsc);
                case 'packing': return compare(a.pack_units*a.pack_quantity, b.pack_units*b.pack_quantity, isAsc);
                case 'batch': return compare(a.batch, b.batch, isAsc);
                case 'stock': return compare(a.current_stock, b.current_stock, isAsc);
                default: return 0;
            }
        });
    }
    getTotalRecord(i){
        this.reorderArray[i].tent_amount = (this.reorderArray[i].amount/this.reorderArray[i].qty)* this.orderQty[i]
    	this.newTentativeCost=0
        for (var j = 0;j < this.reorderArray.length; j++) {
    		this.newTentativeCost += this.reorderArray[j].tent_amount
    	}    
    }

    exportPdf(){
        var head = [
            { title: '#', dataKey: "id"},
            { title: 'Product Name', dataKey: "product"},
            { title: 'Type', dataKey: "type"},
            { title: 'Packing', dataKey: "packing"},
            { title: 'Current Stock', dataKey: "currentStock"},
            { title: 'Order OTY', dataKey:"orderQty"},
            { title: 'Rate', dataKey:"rate"},
            { title: 'Tentative Cost', dataKey:"tentativeCost"},
        ]
        var csvData = []
        var totalDuration
        var dates = []
        for (var i = 0; i < this.reorderArray.length; i++) {
            if(this.orderQty[i]!=""){
                var ob ;
                ob = {}
                ob.id = i+1
                var date = this.reorderArray[i].createdAt.split('T')
                ob.createdAt = date[0] + " " +date[1].substr(0,5)

                //ob.date = this.reorderArray[i].createdAt.split('T')
                ob.type = this.reorderArray[i].type
                ob.product = this.reorderArray[i].product
                ob.packing = this.reorderArray[i].pack_units + 'x' + this.reorderArray[i].pack_quantity
                ob.currentStock = this.reorderArray[i].newPacking + ':' + this.reorderArray[i].newPackingReminder
                ob.orderQty = this.orderQty[i]
                ob.rate = this.reorderArray[i].p_rate
                ob.tentativeCost =  this.reorderArray[i].tent_amount
                if(ob.tentativeCost % 1 != 0){
                    ob.tentativeCost = ob.tentativeCost.toFixed(2)
                }
                csvData.push(ob)
            }
        }
        csvData.push({
        	id: "Total",
        	type: "",
			product: "",
			packing: "",
			currentStock: "",
			orderQty: "",
			rate: "",
			tentativeCost: this.newTentativeCost.toFixed(2)
        })
        var todayDate = new Date().toJSON().toString().substr(0,10)
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
        doc.save('Purchase-Order'+"("+todayDate+")");
    }
    exportReorder(){
    	var head = [
            { title: '#', dataKey: "id"},
            { title: 'Product Name', dataKey: "product"},
            { title: 'Type', dataKey: "type"},
            { title: 'Packing', dataKey: "packing"},
            { title: 'Batch', dataKey:"batch"},
            { title: 'Stock', dataKey: "currentStock"},
        ]
        var csvData = []
        var totalDuration
        var dates = []
        for (var i = 0; i < this.reorderArray.length; i++) {
            var ob ;
            ob = {}
            ob.id = i+1
            var date = this.reorderArray[i].createdAt.split('T')
            ob.createdAt = date[0] + " " +date[1].substr(0,5)

            //ob.date = this.reorderArray[i].createdAt.split('T')
            ob.type = this.reorderArray[i].type
            ob.product = this.reorderArray[i].product
            ob.packing = this.reorderArray[i].pack_units + 'x' + this.reorderArray[i].pack_quantity
            ob.batch = this.reorderArray[i].batch
            ob.currentStock = this.reorderArray[i].newPacking + ':' + this.reorderArray[i].newPackingReminder
            csvData.push(ob)
        }
        var todayDate = new Date().toJSON().toString().substr(0,10)
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
        doc.save('Minimum-Stock-Level'+"("+todayDate+")");
    }

    getData(data){
    	if(data=='' || data == null || data == undefined){
    		return 0
    	}else if(data % 1 != 0){
    		return data.toFixed(2)
    	}else{
    		return data
    	}
	}

    search() {
        this.searchInput = this.searchInput.toLowerCase()
        if (this.searchInput && this.searchInput.trim() != '') {
            this.reorderArray = this.searchArray.filter((item) => {
                let b = item.product.toLowerCase()
                return (b.indexOf(this.searchInput) > -1)
            })
        }
        if (this.searchInput == '') {
            this.reorderArray = this.searchArray;
        }
        this.sortedData = this.reorderArray.slice();
    }

    DeletePharmacyProduct(activity){
        let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            // width: '250px',
            data: activity.product
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                this.loading = true
                this.UserService.DeletePharmacyProduct(activity).subscribe(data => {
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
    
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}