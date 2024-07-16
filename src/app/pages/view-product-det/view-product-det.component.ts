import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product-det',
  templateUrl: './view-product-det.component.html',
  styleUrls: ['./view-product-det.component.css']
})
export class ViewProductDetComponent implements OnInit {

  pId:any;
  imageUrl:any = 'https://littleheartback-production.up.railway.app/api/product/image/';
  prodId:any;
  prodTitle:any;
  prodDesc:any;
  prodPhoto:any;
  prodPrice:any;
  prodDiscount:any;
  prodQuantity:any;
  prodActive:any;
  cartCount=0;

  constructor(private _route:ActivatedRoute,private _product:ProductService,private _cart:CartService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.pId=this._route.snapshot.params['prodId'];
    console.log(this.pId);
    this.getProductDetails(this.pId);
  }

  getProductDetails(pId:any)
  {
    this._product.getProductByProdId(pId).subscribe(
      (data:any)=>{
        this.prodId=data.prodId;
        this.prodTitle=data.prodTitle;
        this.prodDesc=data.prodDesc;
        this.prodPhoto=data.prodPhoto;
        this.prodPrice=data.prodPrice;
        this.prodDiscount=data.prodDiscount;
        this.prodQuantity=data.prodQuantity;
        this.prodActive=data.prodActive;
      }
    );
  }

  ///////// Start Cart ///////////////

  addToCart(prodId:any,prodTitle:any,prodPrice:any,prodActive:any){

    if(prodActive==true)
    {
      this._cart.addtocart(prodId,prodTitle,prodPrice);
    
    let cart:any=localStorage.getItem("cart");
    let pcart = JSON.parse(cart);
    let oldProduct=pcart.find((item:any)=>item.productId==prodId)
    if(oldProduct){
      this.cartCount=pcart.length;
    }else{
      this.cartCount=this.cartCount+1;
    } 

    this._cart.cartValue.next(this.cartCount);
    }
    else{
      this.toastr.warning('Item is Not Available !!','',{
        timeOut:1000,
        progressBar:true,
        progressAnimation:'increasing',
        positionClass: 'toast-top-right',
      });
    }
  }

}
