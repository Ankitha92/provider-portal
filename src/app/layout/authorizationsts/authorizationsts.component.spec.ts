import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationstsComponent } from './authorizationsts.component';

describe('AuthorizationstsComponent', () => {
  let component: AuthorizationstsComponent;
  let fixture: ComponentFixture<AuthorizationstsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationstsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationstsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
