import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpwdVerifyOtpComponent } from './forgotpwd-verify-otp.component';

describe('ForgotpwdVerifyOtpComponent', () => {
  let component: ForgotpwdVerifyOtpComponent;
  let fixture: ComponentFixture<ForgotpwdVerifyOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpwdVerifyOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotpwdVerifyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
