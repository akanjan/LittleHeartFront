import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import baseUrl from 'src/app/services/helper';
import { CategoryService } from 'src/app/services/category.service';
import { CartService } from 'src/app/services/cart.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  page=0;
  data: any;          //All Data
  products: any;     //All Products
  content: any;
  totalElements=0;
  totalPages=0;
  pageNumber=0;
  pageSize=0;
  lastPage:any;
  imageUrl:any = 'https://littleheartback-production.up.railway.app/api/product/image/';
  catId=1;

  cartCount=0;
  toppings = new FormControl('');

  brandList: string[] = ['SAMSUNG', 'REALME', 'ONEPLUS', 'iPHONE', 'ASUS', 'LENAVO',];
  toppingList: string[] = ['3★ & above', '4★ & above', ];
  discountList: string[] = ['50% or more', '40% or more', '30% or more', '20% or more', '10% or more',];
  availabilList: string[] = ['Exclude Out of Stock',];
  gstList: string[] = ['GST Invoice Available',];

  categories=[
    {
      catId:'',
      catTitle:''
    }
  ]

  brands=[{brand:'Samsung'},{brand:'Realme'},{brand:'Boat'},{brand:'Moto'},{brand:'Vivo'},]

  constructor(private _product:ProductService, private spinner: NgxSpinnerService, private _cat:CategoryService,
    private _cart:CartService) { }

  ngOnInit(): void {
    this.getProductList();
    this.category;
    //this.productPriceAfterDiscount();
  }

  getProductList(){
    this._product.getAllProduct(this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.data=data; 
        this.products = this.data.content;
        this.pageSize = this.data.pageSize;
        this.totalElements = this.data.totalElements;
        this.totalPages = this.data.totalPages;
        this.lastPage = this.data.lastPage; 
      },
      (error)=>{
        Swal.fire('Error !!','Error in load product from server','error');
      }
    );
  }

  doInfinite(){
    this.page = this.page + 1;
    setTimeout(()=>{
      this._product.getAllProduct(this.page).subscribe(
        (data:any)=>{
          console.log(data);
          this.data=data; 
          //this.products = this.data.content;
          this.pageSize = this.data.pageSize;
          this.totalElements = this.data.totalElements;
          this.totalPages = this.data.totalPages;
          this.lastPage = this.data.lastPage;
          //this._cart.showCart();

          for(let i=0; i< this.data.content.length; i++)
          {
            this.products.push(this.data.content[i]);  
          }
        });
        console.log('Async operation has ended');
       //infiniteScroll.complete();
    },1000
    );
  }

  onScroll(){
   this.doInfinite();
   
  }

 
  //Lode the Category 
  category = this._cat.categories().subscribe(
    (data:any)=>{
      //Category Load
      this.categories=data;
      //console.log(this.categories); 
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!!','Category Error in loading data from server','error')
    }
  );

  //Category wise product get
  getProductById(catId:any){
    this._product.getProductByCatId(catId).subscribe(
      (data:any)=>{
        console.log(data);
        this.products=data;
      },
      (error)=>{
        Swal.fire('Error !!', 'Category wise product data gat error', 'error')
      }
    );
  }

  getAllProductByCatId(page:any){
    //window.location.reload();
    this._product.getAllProduct(page).subscribe(
      (data:any)=>{
        console.log(data);
        this.data=data; 
        this.page=0;
        this.products = this.data.content;
        this.pageSize = this.data.pageSize;
        this.totalElements = this.data.totalElements;
        this.totalPages = this.data.totalPages;
        this.lastPage = this.data.lastPage;
      },
      (error)=>{
        Swal.fire('Error !!','Error in load product from server','error');
      }
    );
    
  }

  ///////// Start Cart ///////////////

  addToCart(prodId:any,prodTitle:any,prodPrice:any){
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

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


}
