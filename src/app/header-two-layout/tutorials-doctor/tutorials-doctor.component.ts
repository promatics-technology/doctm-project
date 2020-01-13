import { UserService } from '../../providers/user.service'
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment.prod';
import { Component, OnInit, Inject,ViewChild, VERSION } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { DomSanitizer } from '@angular/platform-browser';
import * as Plyr from 'plyr';
@Component({
  selector: 'app-tutorials-doctor',
  templateUrl: './tutorials-doctor.component.html',
  styleUrls: ['./tutorials-doctor.component.css'],
  providers: [UserService]
})
export class TutorialsDoctorComponent implements OnInit  {
	loading
	pdfData
	videoData
	tutorialData
	filteredDataVideo
	filteredDataPDF
	getCategoryArray
	newVideoArray
	allData
	activateTab
	pdfFilteredData
	player
  constructor(private toastr: ToastrService, public dialog: MatDialog, private domSanitizer: DomSanitizer,private userService: UserService,) { }
	ngOnInit() {
		this.player = new Plyr('.plyrID', { captions: { active: true } });
		this.pdfData = []
		this.videoData = []
		this.newVideoArray = []
		this.allData = []
		this.tutorialData = environment.tutorialData
		this.getData()
		this.getDocs()
		this.getCategory()
		this.showByCategory("SmartClinic", 0);
	}
	getData(){
			this.loading = true
			this.userService.GetTutorialVideos().subscribe(data => {
				// console.log(data);
				if(data.response){
				this.videoData=data.data
				var newArray = this.videoData.filter(function (el) {
				  return el.category_name=='SmartClinic'
				});
				this.filteredDataVideo=newArray;
				this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
				}else{
					this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
				}
				this.loading = false;
			}, err => {
				console.log(err);
			})
		}
	 getDocs(){
			this.userService.GetTutorialDocuments().subscribe(data => {
				console.log(data);
				if(data.response){
				this.pdfData=data.data
				var newArray2 = this.pdfData.filter(function (el) {
				  return el.category_name=='SmartClinic'
				});
				this.filteredDataPDF=newArray2;
				this.toastr.success(data.message,'Success',{timeOut: 3000, closeButton: true});
				}else{
					this.toastr.error(data.message,'Error',{timeOut: 3000, closeButton: true});    
				}
				//this.loading = false;
			}, err => {
				console.log(err);
			})
		}
	openDialogDocument(list): void {
		console.log(list)
		let object = {
			pdf :list.pdf,
			url:"https://doctmapi.gagzweblab.xyz/public/tutorials_file/"
		}
		let dialogRef = this.dialog.open(DocumentDialog, {
			width: '850px', height:'500px',
			data: object
		});
	}
	getCategory(){
		this.userService.GetTutorialsCategories().subscribe(data => {
			// console.log(data)
			this.getCategoryArray = data.data
			}, err => {
			console.log(err);
		})
	}
	showByCategory(name, i){
		this.activateTab= i
		var newArray = this.videoData.filter(function (el) {
		  return el.category_name==name
		});
		var newArray2 = this.pdfData.filter(function (el) {
		  return el.category_name==name
		});
		this.filteredDataVideo=newArray;
		this.filteredDataPDF=newArray2;
		// console.log('filtered data');
		// console.log(this.filteredDataVideo);
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
	printDocument(){
		(<any>$('#mydoc')).printThis({
            debug: false,
            importCSS: true,
            importStyle: true,
            printContainer: true,
            pageTitle: "Tutorial",
            removeInline: false,
            printDelay: 333,
            header: null,
            formValues: true
        });
	}
}