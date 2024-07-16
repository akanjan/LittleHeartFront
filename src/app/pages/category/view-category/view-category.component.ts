import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  
    catId:any;
    catTitle:any;
    catDesc:any;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _category: CategoryService) { }

  ngOnInit(): void {
    console.log("Dialog CatId is : "+this.data);
    this.getCategory();
  }

  getCategory()
  {
    this._category.category(this.data).subscribe(
      (data:any)=>{
        this.catId=data.catId;
        this.catTitle=data.catTitle;
        this.catDesc=data.catDesc;
      }
    );
  }

}
