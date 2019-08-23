import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrasiPasienComponent } from './registrasi-pasien.component';

describe('RegistrasiPasienComponent', () => {
  let component: RegistrasiPasienComponent;
  let fixture: ComponentFixture<RegistrasiPasienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrasiPasienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrasiPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
