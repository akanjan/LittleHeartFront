import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  data:any;
  imageUrl:any = 'https://littleheartback-production.up.railway.app/api/product/image/';
  page=0;
  pageNumber=0;
  pageSize=0;
  totalElements=0;
  totalPages=0;
  lastPage:boolean=false;

  products=[
    {
    'prodId': '',
    'prodTitle': '',
    'prodDesc': '',
    'prodPhoto': '',
    'prodPrice': '',
    'prodDiscount': '',
    'prodQuantity': '',
    'prodActive': false,
    } 
  ]

  constructor(private _product:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts()
  {
    this._product.getAllProduct(this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.data=data;
        this.products=data.content;
        this.pageNumber=data.pageNumber;
        this.pageSize=data.pageSize;
        this.totalElements=data.totalElements;
        this.totalPages=data.totalPages;
        this.lastPage=data.lastPage;
      },
      (error)=>{
        Swal.fire('Error !!','Error in load product from server','error');
      }
    );
  }

  onScroll(){
    this.doInfinite(); 
   }

   doInfinite()
   {
    this.page = this.page + 1;
    setTimeout(()=>{
      this._product.getAllProduct(this.page).subscribe(
        (data:any)=>{
          this.data=data; 
          //this.products = this.data.content;
          this.pageSize = this.data.pageSize;
          this.totalElements = this.data.totalElements;
          this.totalPages = this.data.totalPages;
          this.lastPage = this.data.lastPage;
          
          for(let i=0; i< this.data.content.length; i++)
          {
            this.products.push(this.data.content[i]);  
          }
        }
      );
      console.log('Async operation has ended');
    },1000)
   } 

   viewClick()
   {
    
   }

}
