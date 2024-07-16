import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartValue=0;

  constructor(private _cart:CartService) { 
    this._cart.cartValue.subscribe((res:any)=>{this.cartValue=res;})
  }

  ngOnInit(): void {
    //Get Cart Value
   let cartString:any = localStorage.getItem("cart");
   let cart=JSON.parse(cartString);
   this.cartValue=cart.length;
   
   
  }
  

}
