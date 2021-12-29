import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveragedrugComponent } from './coveragedrug.component';

describe('CoveragedrugComponent', () => {
  let component: CoveragedrugComponent;
  let fixture: ComponentFixture<CoveragedrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoveragedrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveragedrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
