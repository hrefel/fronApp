import { Component, OnInit } from "@angular/core";

import { MenuItem } from "primeng/primeng";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	rippleColor = "#ffffff59";
	subtitle: any;
	title: any;
	isHome: boolean = true;

	loading: boolean = false;
	showFiller = false;
	namaLengkapLogin: string;
	menu: any[];
	menuIT: any[];
	visible: boolean;
	ngOnInit() {
		this.menuIT =[
			{
				title: "Home",
				isChild: false,
				icon: "home",
				link: "home"
			},
			{
				title: "Master",
				isChild: true,
				icon: "unordered-list",
				link: "",
				listMenu: [
					{
						name: "Master User",
						icon: "file-add",
						isChild: false,
						link: "master/master-user",
						children: []
					}
				]
			}
			// {
			// 	title: "Pelayanan",
			// 	isChild: true,
			// 	icon: "unordered-list",
			// 	link: "",
			// 	data: {
			// 		headTitle:"Surat Menyurat"
			// 	},
			// 	listMenu: [
			// 		{
			// 			name: "Registrasi Pasien",
			// 			icon: "file-add",
			// 			isChild: false,
			// 			link: "pelayanan/registrasi-pasien",
			// 			children: []
			// 		}
			// 	]
			// }
		]

		this.menu = [
			{
				title: "Home",
				isChild: false,
				icon: "home",
				link: "home"
			},
			{
				title: "Surat Menyurat",
				isChild: true,
				icon: "unordered-list",
				link: "",
				data: {
					headTitle:"Surat Menyurat"
				},
				listMenu: [
					{
						name: "Buat Surat",
						icon: "file-add",
						isChild: false,
						link: "surat-menyurat/buat-baru",
						
						children: []
					},
					{
						name: "Kotak Masuk",
						icon: "inbox",
						isChild: true,
						link: "",
						children: [
							{
								icon: "unordered-list",
								link:'surat-menyurat/inbox-internal',
								name: "Internal"
							},
							{
								icon: "unordered-list",
								link:'surat-menyurat/inbox-eksternal',
								name: "Eksternal"
							}
						]
					},
					{
						icon: "file-exclamation",
						isChild: false,
						link:'surat-menyurat/draft-surat',
						name: "Draft",
						children: []
					},
					{
						icon: "file-text",
						isChild: false,
						link:'surat-menyurat/kotak-keluar',
						name: "Kotak Keluar",
						children: []
					}
				]
			}
		];
		
	}
}
