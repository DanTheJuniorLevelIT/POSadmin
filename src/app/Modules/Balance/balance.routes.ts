import { Routes } from '@angular/router';
import { BalancepageComponent } from './balancepage/balancepage.component';
import { BalancehomeComponent } from './balancehome/balancehome.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';

export const balanceRoute: Routes = [
    {path: 'balancehome', component: BalancehomeComponent,
        // canActivate: [authGuard],
        children: [
            {path: 'balancepage', component: BalancepageComponent},
            {path: 'newcustomer', component: NewcustomerComponent},
            {path: 'view', component: ViewcustomerComponent},
            {path: 'edit', component: EditcustomerComponent},
            {path: '', redirectTo: 'balancepage', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'balancehome', pathMatch: 'full'}
];