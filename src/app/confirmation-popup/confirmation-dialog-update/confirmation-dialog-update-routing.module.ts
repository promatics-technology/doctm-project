import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationDialogUpdateComponent } from './confirmation-dialog-update.component';

const routes: Routes = [
    {
        path: '', component: ConfirmationDialogUpdateComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationDialogUpdateRoutingModule { }
