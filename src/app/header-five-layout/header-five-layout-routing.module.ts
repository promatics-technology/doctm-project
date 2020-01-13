import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderFiveLayoutComponent } from './header-five-layout.component';

const routes: Routes = [
  {
        path: '',
        component: HeaderFiveLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard-pharmacy' },
            { path: 'dashboard-pharmacy', loadChildren: './dashboardpharmacy/dashboardpharmacy.module#DashboardpharmacyModule' },
            { path: 'pharmacy-detail', loadChildren: './pharmacydetail/pharmacydetail.module#PharmacydetailModule' },
            { path: 'stock-purchase', loadChildren: './stockpurchase/stockpurchase.module#StockpurchaseModule' },
            { path: 'purchase-book', loadChildren: './purchasebook/purchasebook.module#PurchasebookModule' },
            { path: 'stock-valuation', loadChildren: './stockvaluation/stockvaluation.module#StockvaluationModule' },
            { path: 'sales-book', loadChildren: './salesbook/salesbook.module#SalesbookModule' },
            { path: 'reorder-book', loadChildren: './reorderbook/reorderbook.module#ReorderbookModule' },
            { path: 'expiry-book', loadChildren: './expirybook/expirybook.module#ExpirybookModule' },
            { path: 'sales-entry', loadChildren: './salesentry/salesentry.module#SalesentryModule' },
            { path: 'sales-entry-one', loadChildren: './salesentryone/salesentryone.module#SalesentryoneModule' },
            { path: 'reorder-products', loadChildren: './reorderproducts/reorderproducts.module#ReorderproductsModule' },
            { path: 'pharmacy-progress', loadChildren: './pharmacyprogress/pharmacyprogress.module#PharmacyprogressModule' },

        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderFiveLayoutRoutingModule { }