import { Routes } from '@angular/router';
import { MainComponent } from '../Product/main/main.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DashproductComponent } from './dashproduct/dashproduct.component';
import { UploadComponent } from './upload/upload.component';

export const productRoute: Routes = [
    {path: 'productpage', component: ProductpageComponent,
        // canActivate: [authGuard],
        children: [
            {path: 'main', component: MainComponent},
            {path: 'dash', component: DashproductComponent},
            {path: 'newprod', component: NewproductComponent},
            {path: 'upIMG', component: UploadComponent},
            {path: 'editprod/:bid', component: EditproductComponent},
            {path: '', redirectTo: 'dash', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'productpage', pathMatch: 'full'}
];