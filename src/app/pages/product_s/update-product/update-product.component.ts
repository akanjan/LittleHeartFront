import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  prodId:any;
  file:any;
  formData:any;
  action:boolean=false;

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

  constructor(private snack:MatSnackBar,private toastr: ToastrService,private _cat:CategoryService,
    private _product:ProductService) { }

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

  sendId()
  {
    console.log("Category id is : "+this.prodId);
    if(this.prodId=='' || this.prodId==null)
    {
      this.snack.open("Product Id is required !!", "Ok", {
        duration:3000,
      });
      return;
    }

    this._product.getProductByProdId(this.prodId).subscribe(
      (data:any)=>{
        this.product=data;
      },
      (error)=>{
        this.toastr.warning('You are Enter Wrong Category Id !! ','',{
          timeOut:1000,
          progressBar:true,
          progressAnimation:'increasing',
          positionClass: 'toast-top-right',
        });
        this.action=false;
      }
    );
    this.action=true;
  }

  updateProduct(prodId:any)
  {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._product.updateProduct(prodId, this.product).subscribe(
          (data:any)=>{
            console.log('Update Data is '+data);
            Swal.fire('Saved!', '', 'success');
            this.action=false;
          },
          (error)=>{
            this.toastr.error('Server Error!! ','',{
              timeOut:1000,
              progressBar:true,
              progressAnimation:'increasing',
              positionClass: 'toast-top-right',
            });
            this.action=false;
          }
        );

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
        this.action=false;
      }
    })
    this.action=false;
  }

}

