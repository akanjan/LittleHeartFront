import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _user:UserService) { }

   user:any;


  ngOnInit(): void {
    //alert(this.data)
    this._user.getUser(this.data).subscribe(
      (data:any)=>{
        this.user=data;
        console.log(this.user);
        
      },
      (error)=>{
        Swal.fire('Error !!','Error Load data from Server','error')
      }
    );
  }

  //Update from submit
  public updateUser()
  {
    this._user.updateUser(this.user).subscribe(
      (data:any)=>{
        Swal.fire('Success','Data Update Successfully','success')
      },
      (error)=>{
        Swal.fire('Error !!','Error in updating user','error')
      }
    );
  }

}
