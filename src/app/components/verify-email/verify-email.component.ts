import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  Form:any=FormGroup;
  userEmail:any;

  constructor(private fb:FormBuilder,private userService:UserService,private _laoder:NgxUiLoaderService,private router:Router) {}

  ngOnInit(): void {
    this.Form=this.fb.group({
      email:['',[Validators.required, Validators.email]]
    })
  }

  onSubmit()
  {
    if(this.Form.valid){
      console.log(this.Form.value.email);
      this.userService.getUserByEmail(this.Form.value.email).subscribe(
        (data:any)=>{
         if(data){
            this._laoder.start();
            localStorage.setItem("userEmail",JSON.stringify(this.Form.value.email))
            //Email Sending Code.....
            this.userService.sendOTP(this.Form.value.email).subscribe(
              (data:any)=>{
                if(data)
                {
                  console.log("Send Otp : "+data);
                  this.router.navigate(['forgotpwd-verify-otp']);
                }
                else
                {
                  this._laoder.stop();
                  Swal.fire('Error !!', 'Please Enter Valid Email Id','error')
                }
                
              }
            );

         }else{
          this._laoder.stop();
          Swal.fire('Error !!', 'Please Enter Valid Email Id','error')
         }
        }
      );
      
    }
  }
  
}
