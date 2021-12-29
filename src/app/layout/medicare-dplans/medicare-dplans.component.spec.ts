import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareDPlansComponent } from './medicare-dplans.component';

describe('MedicareDPlansComponent', () => {
  let component: MedicareDPlansComponent;
  let fixture: ComponentFixture<MedicareDPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicareDPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareDPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
