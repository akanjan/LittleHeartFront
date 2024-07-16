import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  hide = true;
  userEmail:any;
  public password={
    pass1:'',
    pass2:''
  }
  constructor(private snack:MatSnackBar,private userService:UserService) { }

  ngOnInit(): void {
    this.getUserEmail();
  }

  formSubmit()
  {
    if (this.password.pass2 =='' || this.password.pass2==null || this.password.pass1=='' || this.password.pass1==null ||
        this.password.pass1 != this.password.pass2) {
      this.snack.open("Password are not match !!", "Ok", {
        duration:3000,
      });
      return;
    }
    console.log("Your from submitted success full");
    console.log("Local Storage Email is :"+this.userEmail)
    this.userService.passwordChange(this.userEmail,this.password.pass1).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire("Success","Password changed Successfully ","success")
      }
    );
  }

  getUserEmail()
  {
    let emailString:any = localStorage.getItem("userEmail");
    let userEmail=JSON.parse(emailString);
    this.userEmail=userEmail;
    //localStorage.clear();
  }

  
  
  
}
