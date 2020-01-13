import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermComponent } from './term.component';
import { TermRoutingModule } from './term-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TermRoutingModule
  ],
  declarations: [TermComponent]
})
export class TermModule { }
