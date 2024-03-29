import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service'
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment.prod';
@Component({
  selector: 'app-smart-ipd-service',
  templateUrl: './smart-ipd-service.component.html',
  styleUrls: ['./smart-ipd-service.component.css']
})
export class SmartIpdServiceComponent implements OnInit {
getData
    loading
    image
    getImage
    constructor(private toastr: ToastrService,
        private userService: UserService,) { }

	ngOnInit() {
		this.image = environment.doc_service_image
		this.getFaq()
	}
	getFaq(){
		//this.getFaqData =[]
		this.loading = true
		this.userService.GetSmartIPDService().subscribe(data => {
			console.log(data);
			this.getData = data.data.content
			this.getImage = data.data.image
			this.loading = false;
		}, err => {
			console.log(err);
		})
	}
}

