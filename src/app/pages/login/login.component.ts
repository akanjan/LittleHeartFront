import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("Login button clicked !!");
    if(this.loginData.username.trim()=='' || this.loginData.username.trim()==null)
    {
      this.snack.open("User Name is Required !!",'',{
        duration:3000,
      });
      return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password.trim()==null)
    {
      this.snack.open("Password is Required !!",'',{
        duration:3000,
      });
      return;
    }

    //Request to server to generate Token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("Success");
        console.log(data);

        //Login.....
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);

            //redirect .....
            if(this.login.getUserRole() == "ROLE_ADMIN")
            {
              //Admin Dashboard
              //window.location.href='/admin'
              this.router.navigate(['admin'])
              this.login.loginStatusSubject.next(true)
            }else if(this.login.getUserRole() == "ROLE_CUSTOMER")
            {
              //Customer Dashboard
              //window.location.href='/customer-dashboard'
              this.router.navigate(['customer-dashboard'])
              this.login.loginStatusSubject.next(true)
            }else if(this.login.getUserRole() == "ROLE_SELLER")
            {
              //Seller Dashboard
              //window.location.href='/seller-dashboard'
              this.router.navigate(['seller-dashboard'])
              this.login.loginStatusSubject.next(true);
            }else
            {
              this.login.logout();
              
            }



          }
        )
      },
      (error)=>{
        console.log("Error !!");
        console.log(error);
        this.snack.open("Invalid Details !! Try again","",{duration: 3000})
      }
    );

  }

}
