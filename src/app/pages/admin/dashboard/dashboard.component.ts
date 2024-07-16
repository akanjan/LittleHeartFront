import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { AddCategoryComponent } from '../dialog/add-category/add-category.component';
import { AddProductComponent } from '../dialog/add-product/add-product.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog,private router:Router,private _user:UserService,private _cat:CategoryService) { }

  totalUsers=null;
  totalCategory=null;

  ngOnInit(): void {
    this._user.totalUsers().subscribe(
      (data:any)=>{
        this.totalUsers=data;
      },
      (error)=>{
        Swal.fire('Error !!','Error in loading total user from server','error')
      }
    );

    this._cat.totalCategory().subscribe(
      (data:any)=>{
        this.totalCategory=data;
      },
      (error)=>{
        Swal.fire('Error !!','Error in loading total category from server','error')
      }
    );
  }

  openDialog(){
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive"
    }
    this.dialog.open(AddCategoryComponent,config)
  }

  openDialog2(){
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive"
    }
    this.dialog.open(AddProductComponent,config)
  }

  userClick(){
    this.router.navigate(['admin/user'])
    //window.location.href='/admin/user'
  }

  categoryClick(){
    this.router.navigate(['admin/category'])
  }

  productClick(){
    this.router.navigate(['admin/products'])
  }
}
