import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutComponent } from 'src/app/pages/checkout/checkout.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  cartValue=0;
  grantTotal=0;
  gstPrice=0;
  item:any;
  cart:any=[
    {
      productId:'',
      productName:'',
      productQuentity:'',
      productPrice:'',
      totalPrice:''
    },
  ]


  constructor(private _cart:CartService) { }

  ngOnInit(): void {
   this.cart=this._cart.showCart();

   //Get Cart Value
   let cartString:any = localStorage.getItem("cart");
   let cart=JSON.parse(cartString);
   this.cartValue=cart.length;

   this.grantTotal=this._cart.grandTotal();
   this.gstPrice=this._cart.gstCalculate();
    
  }


  removeFromCart(pId:any)
  {
    this._cart.removeFromCart(pId);

     this.cartValue=this.cartValue-1;
     this._cart.cartValue.next(this.cartValue);
     this.cart=this._cart.showCart();
     this.grantTotal=this._cart.grandTotal();
     this.gstPrice=this._cart.gstCalculate();
     
  }


  
  
}
