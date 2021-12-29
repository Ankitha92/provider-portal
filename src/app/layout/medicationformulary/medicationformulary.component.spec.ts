import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationformularyComponent } from './medicationformulary.component';

describe('MedicationformularyComponent', () => {
  let component: MedicationformularyComponent;
  let fixture: ComponentFixture<MedicationformularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationformularyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationformularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
