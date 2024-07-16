import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {

  verifyOtpResult:any;
  constructor(private snack:MatSnackBar,private userService:UserService,private router:Router) { 
    this.userService.verifyOtpResult.subscribe(res=>{
      this.verifyOtpResult=res;
    });

  }

  public verifyOtp={
    otp:'', 
  }

  email:any;
  

  ngOnInit(): void { }


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
          this.verifyOtpResult=data;
          //console.log("Result from Verify OTP is : "+this.verifyOtpResult);
          console.log("Verifies OTP"+ data);
          this.router.navigate(['signup'])
        }else
        {
          Swal.fire('Error !!', 'You are enter Wrong OTP','error');
          this.router.navigate(['verify-otp'])
        }
        this.userService.verifyOtpResult.next(this.verifyOtpResult);
      }
    );


  }



}
