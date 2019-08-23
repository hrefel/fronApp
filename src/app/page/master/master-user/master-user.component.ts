import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-master-user',
  templateUrl: './master-user.component.html',
  styleUrls: ['./master-user.component.scss']
})
export class MasterUserComponent implements OnInit {
  namaUser = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.maxLength(15)])
  constructor() { }

  ngOnInit() {

  }

}
