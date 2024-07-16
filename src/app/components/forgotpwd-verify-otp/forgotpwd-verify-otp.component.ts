import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpwd-verify-otp',
  templateUrl: './forgotpwd-verify-otp.component.html',
  styleUrls: ['./forgotpwd-verify-otp.component.css']
})
export class ForgotpwdVerifyOtpComponent implements OnInit {

  public verifyOtp={
    otp:'', 
  }

  constructor(private snack:MatSnackBar,private userService:UserService,private router:Router,private _laoder:NgxUiLoaderService) { }

  ngOnInit(): void {
    this._laoder.stop();
  }

  formSubmit()
  {
    console.log(this.verifyOtp);
    if (this.verifyOtp.otp == '' || this.verifyOtp.otp == null) {
      this.snack.open("OTP is required !!", "Ok", {
        duration:3000,
      });
      return;
    }

    this.userService.verifyOtp(this.verifyOtp.otp).subscribe(
      (data:any)=>{
        if(data)
        {
          
          console.log("Verifies OTP"+ data);
          this.router.navigate(['forgotpwd'])
        }else
        {
          Swal.fire('Error !!', 'You are enter Wrong OTP','error');
          this.router.navigate(['forgotpwd-otp'])
        }
        
      }
    );

  }

}
