import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  selectCatId:any;
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

  categories=[
    {
      catId:'',
      catTitle:''
    }
  ]

  constructor(private _cat:CategoryService,private toastr: ToastrService,private _product:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
    //Lode the Category in Add Product form
    this._cat.categories().subscribe(
      (data:any)=>{
        //Category Load
        this.categories=data;
        console.log(this.categories); 
      },
      (error)=>{
        console.log(error);
        this.toastr.error('Something went to wrong !!','',{
          timeOut:1000,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass: 'toast-top-right',
        });
      }
    );
  }

  getCatId(catId:any)
  {
    this.selectCatId=catId;
    console.log(this.selectCatId);
    if(this.selectCatId==0)
    {
      this.getAllProducts;
    }else{
    this._product.getProductByCatId(catId).subscribe(
      (data:any)=>{
        this.products=data;
      }
    );
    }
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

   deletProduct(prodId:any)
   {
    console.log('Deleted Product Id is : '+prodId);
    this._product.deleteProduct(prodId).subscribe(
      (data:any)=>{

        this.toastr.success('Product Deleted Success Full !!','',{
          timeOut:1000,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass: 'toast-top-right',
        });
        location.reload();
      },
      (error)=>{
        this.toastr.error('Something Went to wrong !!','Product Not Deleted',{
          timeOut:1000,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass: 'toast-top-right',
        });
      }
    );
   }

}
