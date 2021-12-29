import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilitylookupComponent } from './eligibilitylookup.component';

describe('EligibilitylookupComponent', () => {
  let component: EligibilitylookupComponent;
  let fixture: ComponentFixture<EligibilitylookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilitylookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilitylookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
