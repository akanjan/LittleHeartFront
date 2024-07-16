import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  cartValue:any=new BehaviorSubject<any>(this.updateCart()); 
  //cartDetail:any=new BehaviorSubject<any>(this.showCart()); 
  constructor(private http:HttpClient) { }



  //Add Product to local Storage
  addtocart(prodId:any,prodTitle:any,prodPrice:any)
  {
    let cart=localStorage.getItem("cart");
    if(cart==null)
    {
      //No cart Yet
      let products=[];
      let product={productId:prodId,productName:prodTitle,productPrice:prodPrice,productQuentity: 1};
      products.push(product);
      localStorage.setItem("cart",JSON.stringify(products));
      console.log("Product is added for the first time"); 
    }else
    {
      //Cart Allready Present
      let pcart = JSON.parse(cart);
      let oldProduct = pcart.find((item:any)=>item.productId==prodId)
      if(oldProduct){
        //We have to increase the quentity
        let newProductQuentity=oldProduct.productQuentity+1;
        oldProduct.productQuentity = newProductQuentity;

        pcart.map((item:any)=>{
          if(item.productId == oldProduct.productId)
          {
            item.productQuentity = oldProduct.productQuentity;
          }
        })
        localStorage.setItem("cart",JSON.stringify(pcart));
        console.log("Product quentity is increased");    
      }else{
        //We have to add product
        let product={productId:prodId,productName:prodTitle,productPrice:prodPrice,productQuentity: 1};
        pcart.push(product);
        localStorage.setItem("cart",JSON.stringify(pcart));
        console.log("Product is added");
      }
    }
    this.updateCart();
  }



  //Update Cart
  updateCart()
  {
    let cartString:any = localStorage.getItem("cart");
    let cart=JSON.parse(cartString);
    if(cart==null || cart.length==0)
    {
      console.log("Cart is empty !!");
      return 0;
    }else{
      return cart.length;
    }
  }
  

  //Show cart details
  showCart()
  {
    let cartString:any = localStorage.getItem('cart');
    let cart=JSON.parse(cartString);
    //console.log(cartString);
    return cart;
  }

  removeFromCart(pId:any)
  {
    let cartString:any = localStorage.getItem("cart");
    let cart=JSON.parse(cartString);
    let newCart=cart.filter((item:any)=> item.productId != pId);
    localStorage.setItem('cart',JSON.stringify(newCart));
    this.updateCart();
    console.log(newCart);
  }
  
  //Geand total calculation
  grandTotal()
  {
    let grandTotal=0
    let cartString:any = localStorage.getItem("cart");
    let cart=JSON.parse(cartString);
    cart.map((item:any)=>{
      grandTotal += item.productPrice * item.productQuentity;
      //console.log("Grand total Price "+item.productPrice);
      //console.log("Grand total Item "+item.productQuentity);
    })
    return grandTotal
  }

  gstCalculate()
  {
    let grandTotal=0
    let cartString:any = localStorage.getItem("cart");
    let cart=JSON.parse(cartString);
    cart.map((item:any)=>{
      grandTotal +=item.productPrice*item.productQuentity;
    })
    return grandTotal*1.18;
  }


}
