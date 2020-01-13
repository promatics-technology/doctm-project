import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSixLayoutComponent } from './header-six-layout.component';

const routes: Routes = [
  {
        path: '',
        component: HeaderSixLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard-diagnostic' },
            { path: 'dashboard-diagnostic', loadChildren: './dashboarddiagnostic/dashboarddiagnostic.module#DashboarddiagnosticModule' },            
            { path: 'diagnostic-detail', loadChildren: './diagnosticdetail/diagnosticdetail.module#DiagnosticdetailModule' },
            { path: 'diagnostic-purchase', loadChildren: './diagnosticpurchase/diagnosticpurchase.module#DiagnosticpurchaseModule' },
            { path: 'sales-bookd', loadChildren: './salesbookd/salesbookd.module#SalesbookdModule' },
            { path: 'test-catalogue', loadChildren: './test-catalogue/test-catalogue.module#TestCatalogueModule' },
            { path: 'sales-entry-diagnostics', loadChildren: './salesentrydiagnostics/salesentrydiagnostics.module#SalesentrydiagnosticsModule' },
            { path: 'sales-by-diagnostics', loadChildren: './salesbydiagnostics/salesbydiagnostics.module#SalesbydiagnosticsModule' },
            { path: 'diagnostics-progress', loadChildren: './diagnosticsprogress/diagnosticsprogress.module#DiagnosticsprogressModule' },

        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderSixLayoutRoutingModule { }