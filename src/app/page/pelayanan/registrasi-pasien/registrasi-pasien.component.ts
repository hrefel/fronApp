import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-registrasi-pasien",
	templateUrl: "./registrasi-pasien.component.html",
	styleUrls: ["./registrasi-pasien.component.scss"]
})
export class RegistrasiPasienComponent implements OnInit {
	panelOpenState = false;
	listJenisKelamin: any[];
	listAgama: any[];
	listStatusPerkawinan: any[];
	listPendidikan: any[];
  listPekerjaan: any[];
  listKebangsaan: any[];
  listNegara: any[];

  dataKebangsaan: any;
  selectedNegara: any;
	constructor() {}

	ngOnInit() {
		this.listJenisKelamin = [
			{
				name: "Laki - laki",
				id: 1
			},
			{
				name: "Perempuan",
				id: 2
			}
		];

		this.listAgama = [
			{
				name: "Islam",
				id: 1
			},
			{
				name: "Buddha",
				id: 3
			},
			{
				name: "Hindu",
				id: 4
			}
		];

		this.listStatusPerkawinan = [
			{
				name: "Belum Menikah",
				id: 4
			},
			{
				name: "Menikah",
				id: 5
			},
			{
				name: "Janda",
				id: 6
			},
			{
				name: "Duda",
				id: 7
			}
    ];
    
    this.listPendidikan = [
      {
				name: "PAUD",
				id: 1
			},
      {
				name: "TK",
				id: 2
			},
      {
				name: "SD",
				id: 3
      },
      {
				name: "SMP",
				id: 4
      },
      {
				name: "SMA",
				id: 5
      },
      {
				name: "D3",
				id: 6
      },
      {
				name: "S-1",
				id: 7
			},
    ]

		this.listPekerjaan = [
      {
				name: "Rumah Tangga",
				id: 7
      },
      {
				name: "Pelajar/Mahasiswa",
				id: 8
      },
      {
				name: "Pegawai Negeri Sipil",
				id: 9
      },
      {
				name: "Pegawai Swasta",
				id: 1
			},
    ];
  
    this.listKebangsaan = [
      {
				name: "WNI",
				id: 1
      },
      {
				name: "WNA",
				id: 2
      },
    ]

    this.listNegara = [
      {
				name: "Indonesia",
				id: 1
      },
      {
				name: "Malaysia",
				id: 2
      },
    ]
  }

  onChangeKebangsaan() {
    console.log(this.dataKebangsaan);
    if(this.dataKebangsaan.id == 1) {
    	this.selectedNegara = {
        	name: "Indonesia",
			id: 1
      	}
    }
  }
}
