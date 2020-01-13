import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service'
import { ToastrService } from 'ngx-toastr';
@Component({
	selector: 'app-term',
	templateUrl: './term.component.html',
	styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {

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
		this.userService.TermAndCondition().subscribe(data => {
			console.log(data);
			this.getData = data.data.content
			this.loading = false;
		}, err => {
			console.log(err);
		})
	}

}
