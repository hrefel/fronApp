import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimengModule, MaterialModule } from 'src/app';

import { RegistrasiPasienComponent } from './registrasi-pasien/registrasi-pasien.component';

// example for modular system module
// Nb: path dikosongkan
@NgModule({
  declarations: [RegistrasiPasienComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: RegistrasiPasienComponent }]),
		...MaterialModule, ...PrimengModule
  ]
})
export class RegistrasiPasienModule { }
