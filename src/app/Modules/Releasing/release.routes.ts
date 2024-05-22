import { Routes } from '@angular/router';
import { ReleasingpageComponent } from './releasingpage/releasingpage.component';
import { ReleasinghomeComponent } from './releasinghome/releasinghome.component';
import { AddproductreleaseComponent } from './addproductrelease/addproductrelease.component';
import { DashreleaseComponent } from './dashrelease/dashrelease.component';

export const releaseRoute: Routes = [
    {path: 'releasehome', component: ReleasinghomeComponent,
        // canActivate: [authGuard],
        children: [
            {path: 'releasepage', component: ReleasingpageComponent},
            {path: 'dash', component: DashreleaseComponent},
            {path: 'addrel', component: AddproductreleaseComponent},
            {path: '', redirectTo: 'releasepage', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'releasehome', pathMatch: 'full'}
];