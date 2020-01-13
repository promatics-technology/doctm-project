import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomDialogComponent } from './custom-dialog.component';

const routes: Routes = [
    {
        path: '', component: CustomDialogComponent
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomDialogRoutingModule { }
