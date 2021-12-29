import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandocumentComponent } from './plandocument.component';

describe('PlandocumentComponent', () => {
  let component: PlandocumentComponent;
  let fixture: ComponentFixture<PlandocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlandocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlandocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
