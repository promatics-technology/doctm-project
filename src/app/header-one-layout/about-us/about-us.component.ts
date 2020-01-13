import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service'
import { ToastrService } from 'ngx-toastr';
@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

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
		this.userService.AboutUs().subscribe(data => {
			console.log(data);
			this.getData = data.data.content
			this.loading = false;
		}, err => {
			console.log(err);
		})
	}
}
