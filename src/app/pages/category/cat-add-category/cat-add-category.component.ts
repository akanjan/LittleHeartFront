import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cat-add-category',
  templateUrl: './cat-add-category.component.html',
  styleUrls: ['./cat-add-category.component.css']
})
export class CatAddCategoryComponent implements OnInit {

  public category={
    catTitle:'',
    catDesc:'',
  }

  constructor(private catService:CategoryService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  reset()
  {
    this.category={
      catTitle:'',
      catDesc:'',
    }
  }

  formSubmit()
  {
    console.log(this.category);
    if(this.category.catTitle=='' || this.category.catTitle==null)
    {
      this.snack.open("Category name is required !!", "Ok", {
        duration:3000,
      });
      return;
    }
    if(this.category.catDesc=='' || this.category.catDesc==null)
    {
      this.snack.open("Category Description is required !!", "Ok", {
        duration:3000,
      });
      return;
    }

    //Add Category
    this.catService.addCategory(this.category).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        //alert("Success");
        Swal.fire('Category added Successfully !!','Category id is '+data.catId,'success');
        //Clear the From
        this.reset();
      },
      (error)=>{
         //Error
         console.log(error);
         this.snack.open("Something went wrong", "", {
           duration:3000,
         });
      }
    )
    
  }


}
