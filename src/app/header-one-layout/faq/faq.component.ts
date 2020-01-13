import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service'
@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
    getFaqData
    loading
    constructor(private toastr: ToastrService,
        private userService: UserService,) { }

    ngOnInit() {
        $(document).ready(function(){
            // Add minus icon for collapse element which is open by default
            $(".collapse.in").each(function(){
                $(this).siblings(".panel-heading").find(".glyphicon").addClass("rotate");
            });

            // Toggle plus minus icon on show hide of collapse element
            $(".collapse").on('show.bs.collapse', function(){
                $(this).parent().find(".glyphicon").addClass("rotate");
            }).on('hide.bs.collapse', function(){
                $(this).parent().find(".glyphicon").removeClass("rotate");
            });
        });
        this.getFaq()
    }
    getFaq(){
        this.getFaqData =[]
        this.loading = true
        this.userService.GetFaq().subscribe(data => {
            console.log(data);
            this.getFaqData = data.data
            this.loading = false;
        }, err => {
            console.log(err);
        })
    }
}
