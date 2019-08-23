import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MaterialModule, PrimengModule } from "../../index";

import { HomeComponent } from "./home/home.component";
// @NgModule({
//   declarations: [HomeComponent],
//   imports: [
//     CommonModule
//   ]
// })
// export class PublicModule { }

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: "", component: HomeComponent }]),
		...MaterialModule, ...PrimengModule
	]
})
export class HomeModule {}
