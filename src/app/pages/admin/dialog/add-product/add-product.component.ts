import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories=[
    {
      catId:'',
      catTitle:''
    }
  ]

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

  constructor(private _cat:CategoryService, private snack:MatSnackBar, private _product:ProductService) { }

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
        Swal.fire('Error!!','Error in loading data from server','error')
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

    //Add Product to server
    this._product.addProduct(catId, this.product).subscribe(
      (data:any)=>{
        Swal.fire('Product is Added Successfully !!','Product id is '+data.prodId,'success')
      },
      (error)=>{
        Swal.fire('Error !!','Error while adding product','error')
        console.log(error);
      }
    );
   
  }
}
