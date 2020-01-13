import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { MatRadioChange } from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRoute } from '@angular/router';

declare var $
declare var jsPDF: any; 

export interface ExpiryBookArray {
    product: string;
    type: string;
	reorder_stock: number;
}

@Component({
	selector: 'app-reorderbook',
	templateUrl: './reorderbook.component.html',
	styleUrls: ['./reorderbook.component.css'],
	providers: [UserService]
})
export class ReorderbookComponent implements OnInit {
	sortedData :ExpiryBookArray[]
	searchInput
	loading
	pharmacyData
	headerClicked
	dataArray
	dataArray1
	today = new Date()
    totalProduct
	constructor(private toastr: ToastrService, private userService: UserService, public dialog: MatDialog,
        public router: Router) {

	}

	ngOnInit() {
		this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
		this.headerClicked = 0
		this.dataArray = []
		this.dataArray1 = []
        this.sortedData = []
        this.totalProduct=[]
		this.ProductReorderList()
	}

	ProductReorderList(){
        this.loading = true
        this.userService.ProductReorderList(this.pharmacyData.dataSmartPharmacy._id).subscribe(data => {
            console.log(data)
        	this.loading = false
            if (data.response == true) {
            	this.dataArray = data.data
            	this.dataArray1 = data.data
                for (var i = 0; i < this.dataArray1.length; i++) {
                    this.dataArray[i].select = false
                    if(i==0){
                        this.totalProduct.push(this.dataArray1[i])
                    }
                    var boolean = false
                    for (var j = 0; j < this.totalProduct.length; j++) {  
                        if(this.dataArray1[i].type== this.totalProduct[j].type && this.dataArray1[i].product== this.totalProduct[j].product){
                            boolean = true
                            break;
                        }
                    }
                    
                    if(boolean == false){
                        this.totalProduct.push(this.dataArray1[i])        
                    }
                }
            	this.sortedData = this.dataArray.slice();             
            } else{
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
        const data = this.sortedData.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'product': return compare(a.product, b.product, isAsc);
                case 'type': return compare(a.type, b.type, isAsc);
                case 'reorder_stock': return compare(a.reorder_stock, b.reorder_stock, isAsc);
                default: return 0;
            }
        });
    }

    exportPdf(){
     //    var head = [
     //        { title: '#', dataKey: "id"},
     //        { title: 'Type', dataKey: "type"},
     //        { title: 'Product Name', dataKey: "product"},
     //        { title: 'Packing', dataKey: "packing"},
     //        { title: 'Expiry', dataKey: "expiry"},
     //        { title: 'Batch Number', dataKey: "batch"},
     //        { title: 'Stock', dataKey:"value"},
     //        { title: 'P. Rate', dataKey:"stock"},
     //        { title: 'P. Value', dataKey:"rate"}
     //    ]
     //    var csvData = []
     //    var totalDuration
     //    var dates = []
     //    if(this.optionSelected==0){
	    //     for (var i = 0; i < this.alreadyExpired.length; i++) {
	    //         var ob ;
	    //         ob = {}
	    //         ob.id = i+1
	    //         //var date = this.stockValuation[i].createdAt.split('T')
	    //         //ob.updateAt = date[0] + " " +date[1].substr(0,5)
	    //         ob.type = this.alreadyExpired[i].type
	    //         ob.product = this.alreadyExpired[i].product
	    //         ob.packing = this.alreadyExpired[i].pack_units+ 'x' +this.alreadyExpired[i].pack_quantity
	    //         ob.expiry = this.alreadyExpired[i].month +"/"+ this.alreadyExpired[i].year
	    //         ob.batch = this.alreadyExpired[i].batch
	    //         ob.rate = this.alreadyExpired[i].present_prate
	    //         ob.value = this.alreadyExpired[i].newPacking + ":" +this.alreadyExpired[i].newPackingReminder
	    //         ob.stock = this.alreadyExpired[i].cost.toFixed(2)
	    //         csvData.push(ob)
	    //     }
	    // }
     //    var date = new Date().toJSON().toString().substr(0,10)
     //    var doc = new jsPDF('p', 'pt');
     //    doc.autoTable(head, csvData, {
     //        theme: 'grid',
     //        styles: {
     //            overflow: 'linebreak',
     //        },
     //        margin: 5,
     //        fontSize:8,
     //        tableWidth: 'auto',
     //        showHeader: 'everyPage'
     //    });
     //    if(this.optionSelected==0){
     //  	  doc.save('Already-ExpiryBook'+"("+date+")");
    	// }
    	// if(this.optionSelected==1){
     //  	  doc.save('After-3-ExpiryBook'+"("+date+")");
    	// }
    	// if(this.optionSelected==2){
     //  	  doc.save('After-ExpiryBook'+"("+date+")");
    	// }
    }

    search() {
    	this.searchInput = this.searchInput.toLowerCase()
        if (this.searchInput && this.searchInput.trim() != '') {
            this.dataArray = this.dataArray1.filter((item) => {
                let b = item.product.toLowerCase()
                return (b.indexOf(this.searchInput) > -1)
            })
        }
        if (this.searchInput == '') {
            this.dataArray = this.dataArray1;
        }
        this.sortedData = this.dataArray.slice();
    }

    // UpdateMinStockToReorder(id,data){
    // 	console.log(id,data)
    // 	if(data!=null && data!='' && data!=undefined && data>=0){
    // 		this.loading = true
    // 		let ob = {
    // 			id: id,
				// reorder_stock: data,
    // 		}
	   //      this.userService.UpdateMinStockToReorder(ob).subscribe(data => {
	   //          console.log(data)
	   //      	this.loading = false
	   //          if (data.response == true) {
	   //          	this.toastr.success(data.message,"Success")
	   //          	this.ngOnInit()
	   //          } else{
	   //          	this.toastr.error(data.message,"Error")
	   //          }     
	   //      }, err => {
	   //        console.log(err);
	   //      })
    // 	}else{
    // 		this.toastr.warning("Minimum reorder stock can be 0","Warning")
    // 	}
    // }

    UpdateMinStockToReorder(){
        var array = []
        for (var i = 0; i < this.dataArray.length; i++) {
            if(this.dataArray[i].select){
                if(this.dataArray[i].reorder_stock!=null && this.dataArray[i].reorder_stock>=0){
                    array.push({
                        id: this.dataArray[i].id,
                        reorder_stock: this.dataArray[i].reorder_stock
                    })
                }else{
                    this.toastr.warning("Minimum reorder stock can be 0","Warning")
                    return
                }
            }
        }
        if(array.length>0){
            this.loading = true
            let ob = {
                array: array
            }
            this.userService.UpdateMinStockToReorder(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.toastr.success(data.message,"Success")
                    this.router.navigate(['/header-five-layout/reorder-products']);
                } else{
                    this.toastr.error(data.message,"Error")
                }     
            }, err => {
              console.log(err);
            })
        }
    }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


