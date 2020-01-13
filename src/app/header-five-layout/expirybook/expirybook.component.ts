import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router'; 
import { MatRadioChange } from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

declare var $
declare var jsPDF: any; 

export interface ExpiryBookArray {
    product: string;
    type: string;
    batch: string;
    stock: number;
    p_rate: number
    value: number
   // packing: number
    pack_units: number
    pack_quantity: number
    present_prate: number
    cost: number
    expiry:number
}

@Component({
	selector: 'app-expirybook',
	templateUrl: './expirybook.component.html',
	styleUrls: ['./expirybook.component.css'],
	providers: [UserService]
})
export class ExpirybookComponent implements OnInit {
	alreadyExpired
	afterThreeMonths
	afterSixMonths
	alreadyExpiredBackup
	afterThreeMonthsBackup
	afterSixMonthsBackup
	pharmacyData
	optionSelected
	expireValuation 
	expireValuationAfterThree
	expireValuationAfterSix
	headerClicked: number
	expiryBookArray: ExpiryBookArray[]=[]
	sortedData :ExpiryBookArray[]
	totalProducts
	searchInput
	loading
	constructor(private toastr: ToastrService, private userService: UserService, public dialog: MatDialog) {

	}

	ngOnInit() {
		this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
		this.optionSelected=0
		this.expireValuation=0
		this.expireValuationAfterThree=0
		this.expireValuationAfterSix=0
		this.headerClicked = 0
		this.expiryBookArray=[]
		this.totalProducts = []
		this.sortedData = []
		this.getList()
	}

	getList(){
		this.expiryBookArray=[]
		this.userService.ExpiryBook(this.pharmacyData.dataSmartPharmacy._id).subscribe((result)=>{
			console.log(result)
			if(result.response){
				this.alreadyExpired=result.data
				this.afterThreeMonths=result.expiryAfterThree
				this.afterSixMonths=result.expiryAfterSix
				for (var i = 0; i < this.alreadyExpired.length; i++) {
					this.alreadyExpired[i].p_value = (this.alreadyExpired[i].mrp*(this.alreadyExpired[i].total_stock-this.alreadyExpired[i].sold_stock))/(this.alreadyExpired[i].pack_units*this.alreadyExpired[i].pack_quantity)
					this.alreadyExpired[i].stock = this.alreadyExpired[i].total_stock-this.alreadyExpired[i].sold_stock
					this.alreadyExpired[i].newPacking = Math.trunc(this.alreadyExpired[i].stock /(this.alreadyExpired[i].pack_units*this.alreadyExpired[i].pack_quantity))
					this.alreadyExpired[i].newPackingReminder = this.alreadyExpired[i].stock %(this.alreadyExpired[i].pack_units*this.alreadyExpired[i].pack_quantity)
					this.alreadyExpired[i].present_prate = Math.ceil((this.alreadyExpired[i].amount/this.alreadyExpired[i].total_stock)* this.alreadyExpired[i].stock)
					this.alreadyExpired[i].profit_percent = Math.ceil(((this.alreadyExpired[i].mrp - this.alreadyExpired[i].p_rate)/this.alreadyExpired[i].p_rate) * 100)
					this.alreadyExpired[i].present_mrate = Math.ceil((this.alreadyExpired[i].mrp * this.alreadyExpired[i].stock) /(this.alreadyExpired[i].pack_units*this.alreadyExpired[i].pack_quantity))
					if(this.alreadyExpired[i].stock == 0){
						this.alreadyExpired[i].cost = 0	
					}else{
						this.alreadyExpired[i].cost = (this.alreadyExpired[i].present_prate / this.alreadyExpired[i].stock) * (this.alreadyExpired[i].pack_units*this.alreadyExpired[i].pack_quantity)
					}
					// if(this.alreadyExpired[i].cost %1 != 0){
						// this.alreadyExpired[i].cost = this.alreadyExpired[i].cost.toFixed(2)
					// }
					this.expireValuation += Math.ceil(this.alreadyExpired[i].present_prate)
					var boolean = false
					for (var j = 0; j < this.totalProducts.length; j++) {
						if(this.alreadyExpired[i].type!= this.totalProducts[j].type && this.alreadyExpired[i].product!= this.totalProducts[j].product){
							boolean = true
							break;
						}
					}
					if(boolean == false){
						this.totalProducts.push(this.alreadyExpired[i])		
					}
				}
				for (var i = 0; i < this.afterThreeMonths.length; i++) {
					this.afterThreeMonths[i].p_value = (this.afterThreeMonths[i].mrp*(this.afterThreeMonths[i].total_stock-this.afterThreeMonths[i].sold_stock))/(this.afterThreeMonths[i].pack_units*this.afterThreeMonths[i].pack_quantity)
					this.afterThreeMonths[i].stock = this.afterThreeMonths[i].total_stock-this.afterThreeMonths[i].sold_stock
					this.afterThreeMonths[i].newPacking = Math.trunc(this.afterThreeMonths[i].stock /(this.afterThreeMonths[i].pack_units*this.afterThreeMonths[i].pack_quantity))
					this.afterThreeMonths[i].newPackingReminder = this.afterThreeMonths[i].stock %(this.afterThreeMonths[i].pack_units*this.afterThreeMonths[i].pack_quantity)
					this.afterThreeMonths[i].present_prate = Math.ceil((this.afterThreeMonths[i].amount/this.afterThreeMonths[i].total_stock)* this.afterThreeMonths[i].stock)
					this.afterThreeMonths[i].profit_percent = Math.ceil(((this.afterThreeMonths[i].mrp - this.afterThreeMonths[i].p_rate)/this.afterThreeMonths[i].p_rate) * 100)
					this.afterThreeMonths[i].present_mrate = Math.ceil((this.afterThreeMonths[i].mrp * this.afterThreeMonths[i].stock) /(this.afterThreeMonths[i].pack_units*this.afterThreeMonths[i].pack_quantity))
					if(this.afterThreeMonths[i].stock == 0){
						this.afterThreeMonths[i].cost = 0	
					}else{
						this.afterThreeMonths[i].cost = (this.afterThreeMonths[i].present_prate / this.afterThreeMonths[i].stock) * (this.afterThreeMonths[i].pack_units*this.afterThreeMonths[i].pack_quantity)
					}
					// if(this.afterThreeMonths[i].cost %1 != 0){
						// this.afterThreeMonths[i].cost = this.afterThreeMonths[i].cost.toFixed(2)
					// }
					this.expireValuationAfterThree += Math.ceil(this.afterThreeMonths[i].present_prate)
				}
				for (var i = 0; i < this.afterSixMonths.length; i++) {
					this.afterSixMonths[i].p_value = (this.afterSixMonths[i].mrp*(this.afterSixMonths[i].total_stock-this.afterSixMonths[i].sold_stock))/(this.afterSixMonths[i].pack_units*this.afterSixMonths[i].pack_quantity)
					this.afterSixMonths[i].stock = this.afterSixMonths[i].total_stock-this.afterSixMonths[i].sold_stock
					this.afterSixMonths[i].newPacking = Math.trunc(this.afterSixMonths[i].stock /(this.afterSixMonths[i].pack_units*this.afterSixMonths[i].pack_quantity))
					this.afterSixMonths[i].newPackingReminder = this.afterSixMonths[i].stock %(this.afterSixMonths[i].pack_units*this.afterSixMonths[i].pack_quantity)
					this.afterSixMonths[i].present_prate = Math.ceil((this.afterSixMonths[i].amount/this.afterSixMonths[i].total_stock)* this.afterSixMonths[i].stock)
					this.afterSixMonths[i].profit_percent = Math.ceil(((this.afterSixMonths[i].mrp - this.afterSixMonths[i].p_rate)/this.afterSixMonths[i].p_rate) * 100)
					this.afterSixMonths[i].present_mrate = Math.ceil((this.afterSixMonths[i].mrp * this.afterSixMonths[i].stock) /(this.afterSixMonths[i].pack_units*this.afterSixMonths[i].pack_quantity))
					if(this.afterSixMonths[i].stock == 0){
						this.afterSixMonths[i].cost = 0	
					}else{
						this.afterSixMonths[i].cost = (this.afterSixMonths[i].present_prate / this.afterSixMonths[i].stock) * (this.afterSixMonths[i].pack_units*this.afterSixMonths[i].pack_quantity)
					}
					// if(this.afterSixMonths[i].cost %1 != 0){
						// this.afterSixMonths[i].cost = this.afterSixMonths[i].cost.toFixed(2)
					// }
					this.expireValuationAfterSix += Math.ceil(this.afterSixMonths[i].present_prate)
				}
				this.sortedData=this.alreadyExpired.slice()
				this.alreadyExpiredBackup= this.alreadyExpired
				this.afterThreeMonthsBackup= this.afterThreeMonths
				this.afterSixMonthsBackup= this.afterSixMonths
				// 
				// this.sortedData=this.afterSixMonths.slice()
			}else{
				this.toastr.error(result.message,'Error');
			}
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
                case 'expiry': return compare(a.expiry, b.expiry, isAsc);
                case 'batch': return compare(a.batch, b.batch, isAsc);
                case 'stock': return compare(a.stock, b.stock, isAsc);
                case 'p_rate': return compare(a.cost, b.cost, isAsc);
                case 'value': return compare(a.present_prate, b.present_prate, isAsc);
                case 'packing': return compare(a.pack_units*a.pack_quantity, b.pack_units*b.pack_quantity, isAsc);
                default: return 0;
            }
        });
    }

    selectOne(event: any){
    	this.totalProducts = []
    	this.sortedData = []
    	if(this.optionSelected==0){
    		this.sortedData=this.alreadyExpired
    		this.sortedData=this.alreadyExpired.slice()
    		this.headerClicked=0
    		var boolean = false
			for (var i = 0; i < this.alreadyExpired.length; i++) {
				for (var j = 0; j < this.totalProducts.length; j++) {
					if(this.alreadyExpired[i].type == this.totalProducts[j].type && this.alreadyExpired[i].product == this.totalProducts[j].product){
						boolean = true
						break;
					}
				}
				if(boolean == false){
					this.totalProducts.push(this.alreadyExpired[i])		
				}
			}
    	}else if(this.optionSelected==1){
    		this.sortedData=this.afterThreeMonths
    		this.sortedData=this.afterThreeMonths.slice()
    		this.headerClicked=0
    		var boolean = false
			for (var i = 0; i < this.afterThreeMonths.length; i++) {
				for (var j = 0; j < this.totalProducts.length; j++) {
					if(this.afterThreeMonths[i].type == this.totalProducts[j].type && this.afterThreeMonths[i].product == this.totalProducts[j].product){
						boolean = true
						break;
					}
				}
				if(boolean == false){
					this.totalProducts.push(this.afterThreeMonths[i])		
				}
			}
    	}else if(this.optionSelected==2){
    		this.sortedData=this.afterSixMonths
    		this.sortedData=this.afterSixMonths.slice()
    		this.headerClicked=0
    		var boolean = false
			for (var i = 0; i < this.afterSixMonths.length; i++) {
				for (var j = 0; j < this.totalProducts.length; j++) {
					if(this.afterSixMonths[i].type == this.totalProducts[j].type && this.afterSixMonths[i].product == this.totalProducts[j].product){
						boolean = true
						break;
					}
				}
				if(boolean == false){
					this.totalProducts.push(this.afterSixMonths[i])		
				}
			}
    	}
    }

    exportPdf(){
        var head = [
            { title: '#', dataKey: "id"},
            { title: 'Type', dataKey: "type"},
            { title: 'Product Name', dataKey: "product"},
            { title: 'Packing', dataKey: "packing"},
            { title: 'Expiry', dataKey: "expiry"},
            { title: 'Batch Number', dataKey: "batch"},
            { title: 'Stock', dataKey:"value"},
            { title: 'P. Rate', dataKey:"stock"},
            { title: 'P. Value', dataKey:"rate"}
        ]
        var csvData = []
        var totalDuration
        var dates = []
        if(this.optionSelected==0){
	        for (var i = 0; i < this.alreadyExpired.length; i++) {
	            var ob ;
	            ob = {}
	            ob.id = i+1
	            //var date = this.stockValuation[i].createdAt.split('T')
	            //ob.updateAt = date[0] + " " +date[1].substr(0,5)
	            ob.type = this.alreadyExpired[i].type
	            ob.product = this.alreadyExpired[i].product
	            ob.packing = this.alreadyExpired[i].pack_units+ 'x' +this.alreadyExpired[i].pack_quantity
	            ob.expiry = this.alreadyExpired[i].month +"/"+ this.alreadyExpired[i].year
	            ob.batch = this.alreadyExpired[i].batch
	            ob.rate = this.getData(this.alreadyExpired[i].present_prate)
	            ob.value = this.alreadyExpired[i].newPacking + ":" +this.alreadyExpired[i].newPackingReminder
	            ob.stock = this.getData(this.alreadyExpired[i].cost)
	            csvData.push(ob)
	        }
	    } else if(this.optionSelected==1){
	        for (var i = 0; i < this.afterThreeMonths.length; i++) {
	            var ob ;
	            ob = {}
	            ob.id = i+1
	            //var date = this.stockValuation[i].createdAt.split('T')
	            //ob.updateAt = date[0] + " " +date[1].substr(0,5)
	            ob.type = this.afterThreeMonths[i].type
	            ob.product = this.afterThreeMonths[i].product
	            ob.packing = this.afterThreeMonths[i].pack_units+ 'x' +this.afterThreeMonths[i].pack_quantity
	            ob.expiry = this.afterThreeMonths[i].month +"/"+ this.afterThreeMonths[i].year
	            ob.batch = this.afterThreeMonths[i].batch
	            ob.rate = this.getData(this.afterThreeMonths[i].present_prate)
	            ob.value = this.afterThreeMonths[i].newPacking + ":" +this.afterThreeMonths[i].newPackingReminder
	            ob.stock = this.getData(this.afterThreeMonths[i].cost)
	            csvData.push(ob)
	        }
	    } else if(this.optionSelected==2){
	        for (var i = 0; i < this.afterSixMonths.length; i++) {
	            var ob ;
	            ob = {}
	            ob.id = i+1
	            //var date = this.stockValuation[i].createdAt.split('T')
	            //ob.updateAt = date[0] + " " +date[1].substr(0,5)
	            ob.type = this.afterSixMonths[i].type
	            ob.product = this.afterSixMonths[i].product
	            ob.packing = this.afterSixMonths[i].pack_units+ 'x' +this.afterSixMonths[i].pack_quantity
	            ob.expiry = this.afterSixMonths[i].month +"/"+ this.afterSixMonths[i].year
	            ob.batch = this.afterSixMonths[i].batch
	            ob.rate = this.getData(this.afterSixMonths[i].present_prate)
	            ob.value = this.afterSixMonths[i].newPacking + ":" +this.afterSixMonths[i].newPackingReminder
	            ob.stock = this.getData(this.afterSixMonths[i].cost)
	            csvData.push(ob)
	        }
	    }
   //      csvData.push({
   //      	id: "Total",
   //      	createdAt: "",
			// bill_no: "",
			// party_name: "",
			// amount: this.salesValue
   //      })
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
        if(this.optionSelected==0){
      	  doc.save('Already-ExpiryBook'+"("+date+")");
    	}
    	if(this.optionSelected==1){
      	  doc.save('After-3-ExpiryBook'+"("+date+")");
    	}
    	if(this.optionSelected==2){
      	  doc.save('After-ExpiryBook'+"("+date+")");
    	}
    }

    search() {
    	var dataBackup = []
    	if(this.optionSelected==0){
	        this.searchInput = this.searchInput.toLowerCase()
	        if (this.searchInput && this.searchInput.trim() != '') {
	            this.alreadyExpired = this.alreadyExpiredBackup.filter((item) => {
	                let b = item.product.toLowerCase()
	                return (b.indexOf(this.searchInput) > -1)
	            })
	        }
	        if (this.searchInput == '') {
	            this.alreadyExpired = this.alreadyExpiredBackup;
	        }
	        this.sortedData = this.alreadyExpired.slice();
		}
	    else if(this.optionSelected==1){
			this.searchInput = this.searchInput.toLowerCase()
	        if (this.searchInput && this.searchInput.trim() != '') {
	            this.afterThreeMonths = this.afterThreeMonthsBackup.filter((item) => {
	                let b = item.product.toLowerCase()
	                return (b.indexOf(this.searchInput) > -1)
	            })
	        }
	        if (this.searchInput == '') {
	            this.afterThreeMonths = this.afterThreeMonthsBackup;
	        }
	        this.sortedData = this.afterThreeMonths.slice();
		}
	    else if(this.optionSelected==2){
			this.searchInput = this.searchInput.toLowerCase()
	        if (this.searchInput && this.searchInput.trim() != '') {
	            this.afterSixMonths = this.afterSixMonthsBackup.filter((item) => {
	                let b = item.product.toLowerCase()
	                return (b.indexOf(this.searchInput) > -1)
	            })
	        }
	        if (this.searchInput == '') {
	            this.afterSixMonths = this.afterSixMonthsBackup;
	        }
	        this.sortedData = this.afterSixMonths.slice();
	    }
    }

    DeleteExpiredStock(activity){
        let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            // width: '250px',
            data: activity.product
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                this.loading = true
                this.userService.DeleteExpiredStock(activity).subscribe(data => {
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

    getData(data){
        if(data % 1 != 0){
            return data.toFixed(2)
        }else{
            return data
        }
    }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


