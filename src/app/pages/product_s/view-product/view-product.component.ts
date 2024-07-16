import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

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
    
  
  constructor(private _route:ActivatedRoute,private _product:ProductService) { }

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


}
