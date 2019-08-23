import { Routes } from "@angular/router";

import { AuthGuard } from "./page/auth/auth.guard";
import { LoginComponent } from "./page/auth/login/login.component";

export const AppRoute: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{
		path: "home",
		canActivate: [AuthGuard],
		loadChildren: () =>
			import("./page/public/public.module").then(m => m.HomeModule)
	},
	{
        path: "pelayanan/registrasi-pasien",
        canActivate:[AuthGuard],
        loadChildren: () => import("./page/pelayanan/pelayanan.module").then(m => m.RegistrasiPasienModule)
	},
	{
        path: "master/master-user",
        canActivate:[AuthGuard],
        loadChildren: () => import("./page/master/master.module").then(m => m.MasterUserModule)
	},
];
