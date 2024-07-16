import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-prod-image',
  templateUrl: './upload-prod-image.component.html',
  styleUrls: ['./upload-prod-image.component.css']
})
export class UploadProdImageComponent implements OnInit {

   prodId:any;
   prodTitle:any;
   prodPhoto:any;
   action:boolean=false;
   file:any;
   formData:any;
  

  constructor(private snack:MatSnackBar, private _prod:ProductService,private toastr: ToastrService,
    private http:HttpClient) { }

  ngOnInit(): void {
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

    this._prod.getProductByProdId(this.prodId).subscribe(
      (data:any)=>{
        this.prodTitle=data.prodTitle;
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

  updateImage()
  {
    console.log(this.prodPhoto);
    
    // this._prod.uploadProdImage(this.prodId).
  }

  selectFile(event:any)
  {
    this.file=event.target.files[0];
    console.log(this.file);
    this.formData = new FormData();
    this.formData.append('image',this.file);
  }  

  uploadFile(prodId:any)
  {
    this._prod.uploadProdImage(this.formData,prodId).subscribe(
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

}
