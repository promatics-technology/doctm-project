import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

 	getData
    loading
    constructor(private toastr: ToastrService,
        private userService: UserService,) { }

	ngOnInit() {
		this.getFaq()
	}
	getFaq(){
		//this.getFaqData =[]
		this.loading = true
		this.userService.PrivacyPolicy().subscribe(data => {
			console.log(data);
			this.getData = data.data.content
			this.loading = false;
		}, err => {
			console.log(err);
		})
	}
}
