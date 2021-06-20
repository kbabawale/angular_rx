import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { PatientsComponent } from './patients/patients.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortalRoutingModule } from './portal-routing.module';
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    BaseComponent,
    PatientsComponent,
    AddpatientComponent
  ],
  imports: [
    MatTableModule,
    PortalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class PortalModule { }
