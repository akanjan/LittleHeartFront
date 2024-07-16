import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDetailComponent } from 'src/app/components/cart-detail/cart-detail.component';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  cartValue=0;
  
  constructor( private _cart:CartService,private login: LoginService,private router: Router) { }

  ngOnInit(): void {

    

   //Get Cart Value
   let cartString:any = localStorage.getItem("cart");
   let cart=JSON.parse(cartString);
   this.cartValue=cart.length;
    
  }

  loginCheck()
  {
    console.log("Check User login status");
    if (this.login.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login'])
  return false;
  }

}
