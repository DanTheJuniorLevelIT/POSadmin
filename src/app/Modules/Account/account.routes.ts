import { Routes } from '@angular/router';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { AccounthomeComponent } from './accounthome/accounthome.component';
import { EditaccountComponent } from './editaccount/editaccount.component';
import { UploadComponent } from './upload/upload.component';

export const accountRoute: Routes = [
    {path: 'accounthome', component: AccounthomeComponent,
        // canActivate: [authGuard],
        children: [
            {path: 'accountpage', component: AccountpageComponent},
            {path: 'edit', component: EditaccountComponent},
            {path: 'upload', component: UploadComponent},
            {path: '', redirectTo: 'accountpage', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'accounthome', pathMatch: 'full'}
];