import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prod-add-product',
  templateUrl: './prod-add-product.component.html',
  styleUrls: ['./prod-add-product.component.css']
})
export class ProdAddProductComponent implements OnInit {


  public product ={
    prodTitle:'',
    prodDesc:'',
    prodPhoto:'',
    prodPrice:'',
    prodDiscount:'',
    prodQuantity:'',
    prodActive: true,
    category:{
      catId:''
    },
  }

  categories=[
    {
      catId:'',
      catTitle:''
    }
  ]

  file:any;
  formData:any;

  constructor(private _cat:CategoryService, private snack:MatSnackBar, private _product:ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
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

  selectFile(event:any)
  {
    this.file=event.target.files[0];
    console.log(this.file);
    this.formData = new FormData();
    this.formData.append('image',this.file);
  }

  uploadFile(formData:any,prodId:any)
  {
    this._product.uploadProdImage(formData,prodId).subscribe(
      (data:any)=>{
        this.toastr.success('Image Uploaded ','',{
          timeOut:1000,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass: 'toast-top-right',
        });
      },
      (error)=>{
        this.toastr.error('Something went to wrong !!','',{
          timeOut:1000,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass: 'toast-top-right',
        });
      }
    );
  }

  //addProduct
  addProduct(catId:any)
  {
    console.log(this.product);
    //Velidate Product
    if(this.product.prodTitle=='' || this.product.prodTitle==null)
    {
      this.snack.open("Product Title is required !!", "Ok", {
        duration:3000,
      });
      return;
    }
    if(this.product.prodDiscount=='' || this.product.prodDiscount==null)
    {
      this.snack.open("Product Description required !!", "Ok", {
        duration:3000,
      });
      return;
    }
    if(this.product.prodPrice=='' || this.product.prodPrice==null)
    {
      this.snack.open("Product Price required !!", "Ok", {
        duration:3000,
      });
      return;
    }
    if(this.product.prodDiscount=='' || this.product.prodDiscount==null)
    {
      this.snack.open("Product Discount required !!", "Ok", {
        duration:3000,
      });
      return;
    }
    if(this.product.prodQuantity=='' || this.product.prodQuantity==null)
    {
      this.snack.open("Product Quentity required !!", "Ok", {
        duration:3000,
      });
      return;
    }

    console.log('Your Product Details'+this.product);
    

    //Add Product to server
    this._product.addProduct(catId, this.product).subscribe(
      (data:any)=>{
        this.uploadFile(this.formData, data.prodId)
        Swal.fire('Product is Added Successfully !!','Product id is '+data.prodId,'success')
      },
      (error)=>{
        Swal.fire('Error !!','Error while adding product','error')
        console.log(error);
      }
    );
   
  }

}
