import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  public category={
    catId:'',
    catTitle:'',
    catDesc:'',
    userId:'',
  }

  catId:any;
  action:boolean=false;

  constructor(private snack:MatSnackBar, private _cat:CategoryService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  sendId()
  {
    console.log("Category id is : "+this.catId);
    if(this.catId=='' || this.catId==null)
    {
      this.snack.open("Category Id is required !!", "Ok", {
        duration:3000,
      });
      return;
    }

    this._cat.category(this.catId).subscribe(
    (data:any)=>{
      this.category=data;
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

  updateCategory()
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
        this._cat.updateCategory(this.category).subscribe(
          (data:any)=>{
            Swal.fire('Saved!', '', 'success')
            location.reload();
            this.action=false;
          },
          (error)=>{
            Swal.fire('Error!!','Database Error !!','error')
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    

  }
}
