import { Component, OnInit } from '@angular/core';
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';
import { UserService } from '../providers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-two-layout',
  templateUrl: './header-two-layout.component.html',
  styleUrls: ['./header-two-layout.component.css'],
  providers: [UserService]
})
export class HeaderTwoLayoutComponent implements OnInit {

    doctorData
	subscriptionData
	subscriptionInfo

   constructor(private _spinner: BaThemeSpinner,private userService:UserService, private router: Router) {
	   if(localStorage['doctorDetails']){
      this.doctorData = JSON.parse(localStorage['doctorDetails'])
	  }
		this.GetDoctorDataById();
   }
   ngOnInit() {
	  if(localStorage['doctorDetails']){
      this.doctorData = JSON.parse(localStorage['doctorDetails'])
	  }
	  if(localStorage['subscription_info']){
		  if(this.isJson(localStorage['subscription_info'])){
		   this.subscriptionInfo=JSON.parse(localStorage['subscription_info'])
			}else{
			this.subscriptionInfo=localStorage['subscription_info']
			}
	  }
      
  }
  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

    GetDoctorDataById(){
		if(this.doctorData){
        this.userService.GetDoctorDataById(this.doctorData._id).subscribe(data => {
			// console.log('subodhhh');
            // console.log(data)
            if (data.response == true) {
                localStorage['doctorDetails']=JSON.stringify(data.data)
				
                localStorage['subscription_info']=JSON.stringify(data.data.subscription_id)
            }
        }, err => {
            console.log(err);
        })
		}else{
			localStorage.clear();
			
		 this.router.navigate(['/header-one-layout/homepage']);

		}
    }
	
	
	isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

}
