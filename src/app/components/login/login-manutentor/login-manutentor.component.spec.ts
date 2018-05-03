import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginManutentorComponent } from './login-manutentor.component';

describe('LoginManutentorComponent', () => {
  let component: LoginManutentorComponent;
  let fixture: ComponentFixture<LoginManutentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginManutentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginManutentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
