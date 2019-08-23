import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatSnackBarConfig, MatDatepickerModule } from "@angular/material";
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { TableModule } from "primeng/table";

import { MaterialModule, Apps, PrimengModule } from ".";
import { AppComponent } from "./app.component";
import { AppRoute } from "./app.router";

import { AppService } from "./services/app.service";
import { ErrorInterceptor } from "./services/error.interceptor";
import { HttpConfigInterceptor } from "./services/htppconfig.interceptor";
import { JwtInterceptor } from "./services/jwt.interceptor";
import { LoaderService } from "./services/loader.service";
import { LoaderInterceptor } from "./services/loading.interceptor";
import { AuthGuard } from "./page/auth/auth.guard";
import { ErrorDialogComponent } from "./global/component/error-dialog/error-dialog.component";
import { ErrorDialogService } from "./global/component/error-dialog/error-dialog.service";
import { LoaderComponent } from "./global/component/loader/loader.component";
import { LoginComponent } from "./page/auth/login/login.component";

registerLocaleData(en);

@NgModule({
	declarations: [Apps, LoginComponent, ErrorDialogComponent, LoaderComponent],
	entryComponents: [ErrorDialogComponent, LoaderComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		...MaterialModule,
		// ...PrimengModule,
		TableModule,
		RouterModule.forRoot(AppRoute),
		NgZorroAntdModule
	],
	exports: [RouterModule, FormsModule, ReactiveFormsModule],
	providers: [
		AppService,
		MatSnackBarConfig,
		ErrorDialogService,
		AuthGuard,
		LoaderService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: JwtInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpConfigInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptor,
			multi: true
		},
		{ provide: NZ_I18N, useValue: en_US },
		MatDatepickerModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
