import { Component, OnInit,AfterViewInit } from '@angular/core';
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';

@Component({
  selector: 'app-header-five-layout',
  templateUrl: './header-five-layout.component.html',
  styleUrls: ['./header-five-layout.component.css']
})
export class HeaderFiveLayoutComponent implements OnInit,AfterViewInit {

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
