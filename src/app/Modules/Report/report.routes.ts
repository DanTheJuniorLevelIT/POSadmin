import { Routes } from '@angular/router';
import { ReportpageComponent } from './reportpage/reportpage.component';
import { ReporthomeComponent } from './reporthome/reporthome.component';
import { ChargespageComponent } from './chargespage/chargespage.component';
import { DiscrepancypageComponent } from './discrepancypage/discrepancypage.component';
import { SalespageComponent } from './salespage/salespage.component';
import { ViewchargesComponent } from './viewcharges/viewcharges.component';

export const reportRoute: Routes = [
    {path: 'reporthome', component: ReporthomeComponent,
        // canActivate: [authGuard],
        children:[
            {path: 'reportpage', component: ReportpageComponent},
            {path: 'chargespage', component: ChargespageComponent},
            {path: 'view', component: ViewchargesComponent},
            {path: 'discpage', component: DiscrepancypageComponent},
            {path: 'salespage', component: SalespageComponent},
            {path: '', redirectTo: 'reportpage', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'reporthome', pathMatch: 'full'}
];