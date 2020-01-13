import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';

declare var $
declare var jsPDF: any; 

export interface StockValuation {
	product: string;
	type: string;
	batch: string;
	stock: number;
	cost: number
	present_mrate: number
	present_prate:number
	mrp: number
	pack_units:number
	pack_quantity: number
	newPacking: number
	newPackingReminder: number
}

@Component({
  selector: 'app-stockvaluation',
  templateUrl: './stockvaluation.component.html',
  styleUrls: ['./stockvaluation.component.css'],
  providers: [UserService]
})
export class StockvaluationComponent implements OnInit {
reqData
totalTr
toDate = new Date()
fromDate = new Date()
today = new Date()
  settings = {
	  bigBanner: true,
	  timePicker: false,
	  format: 'dd-MMM-yyyy',
	  defaultOpen: false
  }
  pharmacyData
  loading
  totalBill: number
  stockArray
  headerClicked: number
  stockValuation: StockValuation[]=[]
  sortedData :StockValuation[]
  totalPrate: number
  totalMrp:number
  totalUnits:number
  totalQunatity:number
  purchaseValue:number
  salesValue:number
  totalSoldStock:number
  totalValue:number
  databackup=[]
  searchInput
  showData=[]
  totalProducts
  constructor(private formBuilder: FormBuilder,private UserService : UserService,private toastr: ToastrService) { }

  ngOnInit() {
	this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
	this.StockOnToday()

	this.reqData = {}
	this.reqData = {}
	this.reqData.opt = []
	this.reqData.opt[0] = ""
	this.totalTr = [1]
	this.stockArray = []
	this.totalProducts = []
	this.sortedData = []
  }

	StockOnToday() {
	  this.totalPrate=0
	  this.totalMrp=0
	  this.purchaseValue=0
	  this.salesValue=0
	  this.totalUnits=0
	  this.totalQunatity=0
	  this.totalValue=0
	  this.totalSoldStock=0
	  this.stockValuation=[]
		var object = {
			id: this.pharmacyData.dataSmartPharmacy._id
		}
		this.loading = true
		this.stockArray = []
		this.UserService.StockOnToday(object).subscribe(data => {
			console.log(data);
			this.loading = false
			if (data.response == true) {
				this.toastr.success(data.message, "Success")
				this.stockArray = data.data
				this.stockValuation=data.data
				this.showData=data.data
          		this.databackup=data.data
				for (var i = 0; i < this.stockArray.length; i++) {
					this.totalBill = this.totalBill + this.stockArray[i].amount
					this.totalPrate += this.stockArray[i].p_rate
					this.totalMrp += this.stockArray[i].mrp
					this.totalUnits+= (this.stockArray[i].pack_units*this.stockArray[i].pack_quantity)
					this.totalQunatity+= this.stockArray[i].pack_quantity
					this.stockArray[i].stock = this.stockArray[i].total_stock-this.stockArray[i].sold_stock
					this.stockArray[i].newPacking = Math.trunc(this.stockArray[i].stock /(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
					this.stockArray[i].newPackingReminder = this.stockArray[i].stock % (this.stockArray[i].pack_units*this.stockArray[i].pack_quantity)
					// this.stockArray[i].present_prate = Math.ceil(this.stockArray[i].amount*(this.stockArray[i].total_stock-this.stockArray[i].sold_stock)/
					// 				  	(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
					// this.stockArray[i].present_mrate= Math.ceil(this.stockArray[i].mrp*(this.stockArray[i].total_stock-this.stockArray[i].sold_stock)/
					// 				  	(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
					this.stockArray[i].present_prate = 0
					if(this.stockArray[i].total_stock>0){
						this.stockArray[i].present_prate = (this.stockArray[i].amount/this.stockArray[i].total_stock)* this.stockArray[i].stock
					}
					this.stockArray[i].profit_percent = Math.ceil(((this.stockArray[i].mrp - this.stockArray[i].p_rate)/this.stockArray[i].p_rate) * 100)
					// this.stockArray[i].present_mrate = Math.ceil(this.stockArray[i].present_prate + ((this.stockArray[i].profit_percent)/100) * this.stockArray[i].present_prate)
					this.stockArray[i].present_mrate = Math.ceil((this.stockArray[i].mrp * this.stockArray[i].stock) /(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
					if(this.stockArray[i].stock == 0){
						this.stockArray[i].cost = 0	
					}else{
						this.stockArray[i].cost = (this.stockArray[i].present_prate / this.stockArray[i].stock) * (this.stockArray[i].pack_units*this.stockArray[i].pack_quantity)
					}
					this.purchaseValue += Math.ceil(this.stockArray[i].present_prate)
					this.salesValue += Math.ceil(this.stockArray[i].present_mrate) 
					if(i==0){
						this.totalProducts.push(this.stockArray[i])
					}
					var boolean = false
					for (var j = 0; j < this.totalProducts.length; j++) {
						if(this.stockArray[i].type== this.totalProducts[j].type && this.stockArray[i].product== this.totalProducts[j].product){
							boolean = true
							break;
						}
					}
					if(boolean == false){
						this.totalProducts.push(this.stockArray[i])		
					}
				}
				var expiryValue: number = 0
				for (var i = 0; i < data.dataExpiry.length; i++) {
					data.dataExpiry[i].stock = data.dataExpiry[i].total_stock-data.dataExpiry[i].sold_stock
					data.dataExpiry[i].present_mrate = Math.ceil((data.dataExpiry[i].mrp * data.dataExpiry[i].stock) /(data.dataExpiry[i].pack_units*data.dataExpiry[i].pack_quantity))
					expiryValue += Math.ceil(data.dataExpiry[i].present_mrate) 
				}
				this.salesValue = this.salesValue - expiryValue
				this.sortedData=this.stockValuation.slice()				
			} else {
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
				case 'batch': return compare(a.batch, b.batch, isAsc);
				case 'stock': return compare(a.stock, b.stock, isAsc);
				case 'p_rate': return compare(a.cost, b.cost, isAsc);
				case 'value': return compare(a.present_mrate, b.present_mrate, isAsc);
				case 'pvalue': return compare(a.present_prate, b.present_prate, isAsc);				
				case 'packing': return compare(a.stock, b.stock, isAsc);
				case 'mrp': return compare(a.mrp, b.mrp, isAsc); 
				default: return 0;
			}
		});
	}

 	search() {
		this.totalPrate=0
		this.totalMrp=0
		this.purchaseValue=0
		this.salesValue=0
		this.totalUnits=0
		this.totalQunatity=0
		this.totalValue=0
		this.totalSoldStock=0
		this.totalProducts = []
        this.searchInput = this.searchInput.toLowerCase()
        if (this.searchInput && this.searchInput.trim() != '') {
            this.showData = this.databackup.filter((item) => {
                let b = item.product.toLowerCase()
                let c = item.type
                return (b.indexOf(this.searchInput) > -1 || c.indexOf(this.searchInput) > -1)
            })
        }
        if (this.searchInput == '') {
            this.showData = this.databackup;
        }
		for (var i = 0; i < this.showData.length; i++) {
			this.totalBill = this.totalBill + this.showData[i].amount
			this.totalPrate += this.showData[i].p_rate
			this.totalMrp += this.showData[i].mrp
			this.totalUnits+= (this.showData[i].pack_units*this.showData[i].pack_quantity)
			this.totalQunatity+= this.showData[i].pack_quantity
			this.showData[i].stock = this.showData[i].total_stock-this.showData[i].sold_stock
			this.showData[i].newPacking = Math.trunc(this.showData[i].stock /(this.showData[i].pack_units*this.showData[i].pack_quantity))
			this.showData[i].newPackingReminder = this.showData[i].stock % (this.showData[i].pack_units*this.showData[i].pack_quantity)
			this.showData[i].present_prate = Math.ceil((this.showData[i].amount/this.showData[i].total_stock)* this.showData[i].stock)
			this.showData[i].profit_percent = Math.ceil(((this.showData[i].mrp - this.showData[i].p_rate)/this.showData[i].p_rate) * 100)
			this.showData[i].present_mrate = Math.ceil((this.showData[i].mrp * this.showData[i].stock) /(this.showData[i].pack_units*this.showData[i].pack_quantity))
			this.showData[i].cost = (this.showData[i].present_prate / this.showData[i].stock) * (this.showData[i].pack_units*this.showData[i].pack_quantity)
			this.purchaseValue += Math.ceil(this.showData[i].present_prate)
			this.salesValue += Math.ceil(this.showData[i].present_mrate)
			if(i==0){
				this.totalProducts.push(this.showData[i])
			}
			var boolean = false
			for (var j = 0; j < this.totalProducts.length; j++) {
				if(this.showData[i].type== this.totalProducts[j].type && this.showData[i].product== this.totalProducts[j].product){
					boolean = true
					break;
				}
			}
			if(boolean == false){
				this.totalProducts.push(this.showData[i])		
			}
		}
        this.sortedData = this.showData.slice();
    }

    exportPdf(){
        var head = [
            { title: '#', dataKey: "id"},
            { title: 'Type', dataKey: "type"},
            { title: 'Product Name', dataKey: "product"},
            { title: 'Packing', dataKey: "packing"},
            { title: 'Batch Number', dataKey: "batch"},
            { title: 'M.R.P.', dataKey:"mrp"},
            { title: 'Stock', dataKey:"stock"},
            { title: 'P. Rate', dataKey:"rate"},
            { title: 'S. Value', dataKey:"value"},
            { title: 'P. Value', dataKey:"prate"}
        ]
        var csvData = []
        var totalDuration
        var dates = []
        for (var i = 0; i < this.sortedData.length; i++) {
            var ob ;
            ob = {}
            ob.id = i+1
            //var date = this.stockValuation[i].createdAt.split('T')
            //ob.updateAt = date[0] + " " +date[1].substr(0,5)
            ob.type = this.sortedData[i].type
            ob.product = this.sortedData[i].product
			ob.packing = this.sortedData[i].pack_units + 'x' + this.sortedData[i].pack_quantity
            ob.batch = this.sortedData[i].batch
            ob.mrp = this.sortedData[i].mrp
            ob.value = this.getData(this.sortedData[i].present_mrate)
            ob.stock = this.sortedData[i].newPacking + ':' + this.sortedData[i].newPackingReminder
            ob.rate = this.getData(this.sortedData[i].cost)
            ob.prate = this.getData(this.sortedData[i].present_prate)
            csvData.push(ob)
        }
        csvData.push({
        	id: "Total",
			type: '',
			product: '',
			packing: '',
			batch: '',
			mrp: '',
			value: this.salesValue,
			stock: '',
			rate: '',
			prate: this.purchaseValue
        })
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
        doc.save('StockValuation'+"("+date+")");
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
