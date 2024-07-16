import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  verifyOtpResult:any;


  public user={
    name:'',
    email:'',
    password:'',
    phoneNo:'',
    userPic:'',
    address:'',
  }

  constructor(private userService:UserService, private snack:MatSnackBar,private router:Router,private _laoder:NgxUiLoaderService) {

    this.userService.verifyOtpResult.subscribe(res=>{
      this.verifyOtpResult=res;
    });

   }

  ngOnInit(): void {
    this.dataSaveToDb();
  }


  formSubmit()
  {
    console.log(this.user);
    if (this.user.name == '' || this.user.name == null) {
      this.snack.open("Name is required !!", "Ok", {
        duration:3000,
      });
      return;
    }
    //Saves Data to local storage
    localStorage.setItem("user",JSON.stringify(this.user))

    //Check User allready registered or not
    this.userService.getUserByEmail(this.user.email).subscribe(
      data=>{
        if(!data)
        {
          this.userService.sendOTP(this.user.email).subscribe(
            (data:any)=>{
              if(data)
              {
                console.log("Send Otp : "+data);
                this._laoder.stop();
                this.router.navigate(['verify-otp']);
              }
              else
              {
                this._laoder.stop();
                Swal.fire('Error !!', 'Please Enter Valid Email Id','error')
              }
            }
          );
        }else
        {
          this._laoder.stop();
          Swal.fire("Warning","User Allready Registered !!","warning");
          this.router.navigate(['signup']);
        }
      } 
    );
  }

  dataSaveToDb()
  {
    if(this.verifyOtpResult)
    {
      console.log("Result of Verify OTP is : "+this.verifyOtpResult);
      //Get Data From Local Storage
      let userString:any = localStorage.getItem("user");
      let user=JSON.parse(userString);

      this.userService.addUser(user).subscribe(
        (data:any)=>{
          //success
          console.log(data);
          //alert("Success");
          Swal.fire('User Registered Successfully !!','User id is '+data.id,'success')
          
        },
        (error)=>{
          //Error
          console.log(error);
          this.snack.open("Something went wrong", "", {
            duration:3000,
          });
        }
      )
    }
  }

}
