import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { PrintComponent } from './print/print.component';

export const homeRoute: Routes = [
    {path: 'home', component: HomeComponent,
        // canActivate: [authGuard],
        children: [
            {path: 'homepage', component: HomepageComponent},
            {path: 'print', component: PrintComponent},
            {path: '', redirectTo: 'homepage', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];