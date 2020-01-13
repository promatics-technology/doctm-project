import { Component, OnInit } from '@angular/core';
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';
@Component({
  selector: 'app-header-one-layout',
  templateUrl: './header-one-layout.component.html',
  styleUrls: ['./header-one-layout.component.css']
})
export class HeaderOneLayoutComponent implements OnInit {

  constructor(private _spinner: BaThemeSpinner) {}

  ngOnInit() {
  }
  
  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }
}
