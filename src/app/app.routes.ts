import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { accountRoute } from './Modules/Account/account.routes';
import { balanceRoute } from './Modules/Balance/balance.routes';
import { productRoute } from './Modules/Product/product.routes';
import { releaseRoute } from './Modules/Releasing/release.routes';
import { reportRoute } from './Modules/Report/report.routes';
import { homeRoute } from './Modules/Home/home.routes';
import { authGuard } from './auth.guard';
import { remittanceRoute } from './Modules/Remittance/remit.routes';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'main', component: AdminmainComponent,
        // canActivate: [authGuard],
        children:[
            {
                path: 'Home',
                // canActivate: [authGuard],
                loadChildren: () => import('./Modules/Home/home.routes').then(r=>homeRoute)
            },
            {
                path: 'Report',
                // canActivate: [authGuard],
                loadChildren: () => import('./Modules/Report/report.routes').then(r=>reportRoute)
            },
            {
                path: 'Releasing',
                // canActivate: [authGuard],
                loadChildren: () => import('./Modules/Releasing/release.routes').then(r=>releaseRoute)
            },
            {
                path: 'Product',
                // canActivate: [authGuard],
                loadChildren: () => import('./Modules/Product/product.routes').then(r=>productRoute)
            },
            {
                path: 'Balance',
                // canActivate: [authGuard],
                loadChildren: () => import('./Modules/Balance/balance.routes').then(r=>balanceRoute)
            },
            {
                path: 'Account',
                // canActivate: [authGuard],
                loadChildren: () => import('./Modules/Account/account.routes').then(r=>accountRoute)
            },
            {
                path: 'Remittance',
                // canActivate: [authGuard],
                loadChildren: () => import('./Modules/Remittance/remit.routes').then(r=>remittanceRoute)
            },
            {path: '', redirectTo: 'Home', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'main', pathMatch: 'full'}
];
