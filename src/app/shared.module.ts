import { NgModule, ModuleWithProviders, LOCALE_ID } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule, PrimengModule } from ".";

@NgModule({
	imports: [
		FormsModule,
		HttpClientModule,
		...PrimengModule,
		...MaterialModule,
		ReactiveFormsModule
	],
	exports: [
		FormsModule,
		HttpClientModule,
		...PrimengModule,
		...MaterialModule,
		ReactiveFormsModule
	]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				{
					provide: LocationStrategy,
					useClass: HashLocationStrategy
				},
				{
					provide: LOCALE_ID,
					useValue: "id-ID"
				}
			]
		};
	}
}
