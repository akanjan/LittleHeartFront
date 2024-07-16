import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import { ViewCategoryComponent } from '../view-category/view-category.component';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  public categories=[
    {
      catId:'',
      catTitle:'',
      catDesc:''
    }
  ]

  constructor(private _category:CategoryService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory()
  {
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        Swal.fire('Error !!','Error for Load Data from Server','error');
      }
    );
  }

    //Open view Dialogue
    openDialog(catId:any) {
      const dialogRef=this.dialog.open(ViewCategoryComponent,{
        width: '350px',
        data: catId
      });
    }

    deleteCategory(catId:any)
    {
      
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this._category.deleteCategory(catId).subscribe(
            (data:any)=>{
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              location.reload();
            },
            (error)=>{
              Swal.fire('Error !!','Error in Delete data from database','error');
            }
          )
        }
      }) 
    }

}
