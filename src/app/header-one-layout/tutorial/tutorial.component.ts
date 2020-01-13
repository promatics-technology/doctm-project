import { UserService } from '../../providers/user.service'
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment.prod';
import { Component, OnInit, Inject,ViewChild, VERSION } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
  providers: [UserService]
})
export class TutorialComponent implements OnInit {
	loading
	pdfData
	videoData
	tutorialData
	filteredData
	getCategoryArray
	newVideoArray
	allData
	activateTab
	pdfFilteredData
  constructor(private toastr: ToastrService, public dialog: MatDialog, private domSanitizer: DomSanitizer,private userService: UserService,) { }

  ngOnInit() {
  	this.pdfData = []
	this.videoData = []

	this.newVideoArray = []
	this.allData = []
  	this.tutorialData = environment.tutorialData
  	this.getData()
  	this.getCategory()
    this.showByCategory('Smart Assistant', 0);

		
  }
  getData(){
		this.loading = true
		this.userService.GetUploadTutorials().subscribe(data => {
			console.log(data);
			if(data.response){
				this.allData  = data.data
				if(this.allData){
				for (var i = 0; i < data.data.length; i++) {
					if(data.data[i].fileName){
					if(data.data[i].fileName.split('.')[1]=='pdf'){
						this.pdfData.push(data.data[i])
					}else if(data.data[i].fileName.split('.')[1]=='mp4' || data.data[i].fileName.split('.')[1]=='mkv'){
						this.videoData.push(data.data[i])
					}
				}
				}
			
				this.filteredData=this.videoData;
				this.pdfFilteredData = this.pdfData
				console.log(this.filteredData)
				console.log(this.pdfFilteredData)
				}
				this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
			}else{
				this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
			}
			this.loading = false;
		}, err => {
			console.log(err);
		})
	}

	openDialogDocument(list): void {
		console.log(list)
		let object = {
			pdf :list.fileName,
			url:this.tutorialData

		}
		let dialogRef = this.dialog.open(DocumentDialog, {
			width: '850px', height:'500px',

			data: object
		});
	}
	getCategory(){
		this.userService.GetTutorialsCategories().subscribe(data => {
			console.log(data)
			this.getCategoryArray = data.data
			}, err => {
			console.log(err);
		})
	}
	showByCategory(name, i){
		console.log(name)
		console.log(i)
		// var newd 
		// newd= []
		// for (var i = 0; i < this.videoData.length; i++) {
		// 	if(name==this.videoData[i].category){
		// 		console.log(name,this.videoData[i].category)
		// 		console.log(this.videoData[i]);
		// 		this.videoData = this.videoData
		// 		console.log(this.videoData)
		// 	}
		// }
		this.activateTab= i


		var newArray = this.videoData.filter(function (el) {
		  return el.category==name
		});

		this.filteredData=newArray;
		// var newArray1 = this.pdfData.filter(function (el) {
		//   return el.category==name
		// });

		// this.pdfFilteredData=newArray1;

	}
	getClass(i){
		if (i==this.activateTab) {
			return 'active'
		}else if (i<this.activateTab) {
			return 'completed'
		}

	}
	

}
//////////////////////
@Component({
	selector: 'document',
	templateUrl: 'document.html',
})
export class DocumentDialog {

	constructor(
		private domSanitizer:DomSanitizer,
		public dialogRef: MatDialogRef<DocumentDialog>,
		@Inject(MAT_DIALOG_DATA) public data: any
		) {}

	getSafeContent(data){
		console.log(data)
		return this.domSanitizer.bypassSecurityTrustHtml("https://docs.google.com/gview?url="+data);
	}

}