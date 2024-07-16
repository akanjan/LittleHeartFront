import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import { ViewCategoryComponent } from '../view-category/view-category.component';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {

  public categories=[
    {
      catId:'',
      catTitle:'',
      catDesc:''
    }
  ]

  constructor(private _category:CategoryService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCategory()
  }

  //Shoe All Category
  getAllCategory()
  {
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        Swal.fire('Error !!','Error for Load Data from Server','error')
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


}
