import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimengModule, MaterialModule } from 'src/app';

import { RegistrasiPasienComponent } from '../pelayanan/registrasi-pasien/registrasi-pasien.component';

import { MasterUserComponent } from './master-user/master-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MasterModule { }

@NgModule({
  declarations: [MasterUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: MasterUserComponent }]),
		...MaterialModule, ...PrimengModule, ReactiveFormsModule
  ]
})
export class MasterUserModule { }
