import { Component, OnInit,AfterViewInit } from '@angular/core';
import { BaThemePreloader, BaThemeSpinner } from '../theme/services';

@Component({
  selector: 'app-header-six-layout',
  templateUrl: './header-six-layout.component.html',
  styleUrls: ['./header-six-layout.component.css']
})
export class HeaderSixLayoutComponent implements OnInit {

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
