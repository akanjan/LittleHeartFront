import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { UpdateUserComponent } from '../admin/dialog/update-user/update-user.component';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private allUsers: UserService, public dialog: MatDialog,) { }

  users:any=null;
  displayedColumns: string[] = ['id', 'name', 'email', 'phoneNo', 'address', 'roles', 'button'];
  dataSource : MatTableDataSource<any>=new MatTableDataSource<any>();
  //For Paginator
  @ViewChild(MatPaginator)matPaginator!:MatPaginator;

  //For Sort the Data
  @ViewChild(MatSort)matSort!:MatSort;
  
  //Filter Text
  FilterText='';

  ngOnInit(): void {
    this.allUsers.getAllUsers().subscribe(
      (data:any)=>{
        console.log(data);
        this.users=data;
        this.dataSource = new MatTableDataSource<any>(this.users)
        //For Paginator
        if(this.matPaginator)
        {
          this.dataSource.paginator=this.matPaginator;
        }
        //For Sort Data
        if(this.matSort)
        {
          this.dataSource.sort=this.matSort;
        }
      },
      (error)=>{
        Swal.fire('Error !!', 'Loading Data From Server', 'error')
      }
    );
  }

  filterData()
  {
    this.dataSource.filter = this.FilterText.trim().toLowerCase();
  }

  //Delete User
  deleteUser(userId:any)
  {
    // alert(userId);
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.allUsers.deleteUser(userId).subscribe(
          (data:any)=>{
            this.ngOnInit()
            Swal.fire('Success','User Deleted','success');
          },
          (error)=>{
            Swal.fire('Error','Error In Deleting User <br> First Delete From User_Role Table','error');
          }
        );
      }
    })
  }

  
  openDialog(userId:any){
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive"
    }
    
    const dialogRef = this.dialog.open(UpdateUserComponent,{
      data:userId,
      width: "dialog-responsive"
    })
  } 
}
