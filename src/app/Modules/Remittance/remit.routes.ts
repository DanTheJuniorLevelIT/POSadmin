import { Routes } from "@angular/router";
import { RemithomeComponent } from "./remithome/remithome.component";
import { RemitpageComponent } from "./remitpage/remitpage.component";
import { AddremitComponent } from "./addremit/addremit.component";
import { DashremitComponent } from "./dashremit/dashremit.component";
import { EditremitComponent } from "./editremit/editremit.component";

export const remittanceRoute: Routes = [
    {path: 'remit', component: RemithomeComponent,
        children: [
            {path: 'dash', component: DashremitComponent},
            {path: 'remithome', component: RemitpageComponent},
            {path: 'addremit', component: AddremitComponent},
            {path: 'editremit', component: EditremitComponent},
            {path: '', redirectTo: 'dash', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'remit', pathMatch: 'full'}
]