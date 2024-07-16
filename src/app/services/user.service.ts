import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BehaviorSubject, Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  verifyOtpResult = new BehaviorSubject<boolean>(false);

  constructor(
    private http:HttpClient,
    private _laoder:NgxUiLoaderService
  ) { }

  //Add User
  public addUser(user:any)
  {
    return this.http.post(`${baseUrl}/api/v1/auth/register`,user);
  };

  //Get All Users
  public getAllUsers()
  {
   return this.http.get(`${baseUrl}/api/users/`);
  }

  //Delete User
  public deleteUser(userId:any)
  {
    return this.http.delete(`${baseUrl}/api/users/${userId}`)
  }

  //Get the Single User
  public getUser(userId:any)
  {
    return this.http.get(`${baseUrl}/api/users/${userId}`)
  }

  //Update User
  public updateUser(user:any)
  {
    return this.http.put(`${baseUrl}/api/users/${user.id}`, user)
  }

  //Count total No of Users
  public totalUsers()
  {
    return this.http.get(`${baseUrl}/api/users/totalusers`);
  }

  //Send OTP
  public sendOTP(email:any)
  {
    this._laoder.start();
    return this.http.post(`${baseUrl}/api/v1/auth/otp/${email}`, email);
    
  }

  //Verify OTP
  public verifyOtp(otp:any)
  {
    return this.http.post(`${baseUrl}/api/v1/auth/otp/verify/${otp}`, otp);
  }

  //Get User By Email
  public getUserByEmail(email:any)
  {
    return this.http.get(`${baseUrl}/api/v1/auth/otp/${email}`, email);
  }

  //Change Password
  public passwordChange(email:any, password:any)
  {
    return this.http.put(`${baseUrl}/api/v1/auth/all/${email}/password/${password}`, password,{responseType: 'text'});
  }
}
