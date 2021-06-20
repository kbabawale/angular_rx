import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: 'patients',
                component: PatientsComponent,
            },
            {
                path: '',
                redirectTo: 'patients',
                pathMatch: 'full'
            },
            {
                path: 'add-patient',
                component: AddpatientComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortalRoutingModule { }
