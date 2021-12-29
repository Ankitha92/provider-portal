import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlancomparsionComponent } from './plancomparsion.component';

describe('PlancomparsionComponent', () => {
  let component: PlancomparsionComponent;
  let fixture: ComponentFixture<PlancomparsionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlancomparsionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlancomparsionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
