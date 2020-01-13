import { Component, OnInit } from '@angular/core';
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';
@Component({
  selector: 'app-header-four-layout',
  templateUrl: './header-four-layout.component.html',
  styleUrls: ['./header-four-layout.component.css']
})
export class HeaderFourLayoutComponent implements OnInit {

  constructor(private _spinner: BaThemeSpinner) { }

  ngOnInit() {
  }
   public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }
}
