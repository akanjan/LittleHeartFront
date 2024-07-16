import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { CartDialogComponent } from 'src/app/pages/cart-dialog/cart-dialog.component';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  User = null;
  

  constructor(public login: LoginService,public dialog: MatDialog, public _cart:CartService) {
    this._cart.cartValue.subscribe((res:any)=>{this.cartValue=res;})
  }

  cartValue:any;

  

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.User = this.login.getUser();

    this.login.loginStatusSubject.asObservable().subscribe((data) => {
    this.isLoggedIn = this.login.isLoggedIn();
    this.User = this.login.getUser();
    });
 
    //this.cartValue = this._cart.updateCart();


  }

  public logout() {
    this.login.logout();
    window.location.reload();
    // this.login.loginStatusSubject.next(false);
  }

  openDialog()
  {
    this.dialog.open(CartDialogComponent);
  }

  
}
