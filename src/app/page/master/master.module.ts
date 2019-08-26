import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule, MaterialModule } from 'src/app';

import * as app from './';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MasterModule { }

@NgModule({
  declarations: [app.MasterUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: app.MasterUserComponent }]),
		...MaterialModule, ...PrimengModule, ReactiveFormsModule
  ]
})
export class MasterUserModule { }
