import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient, private loginService:LoginService) { }
  
  //Add Category
  public addCategory(category:any)
  {
    let userId=this.loginService.getUser().id;
    console.log(userId);
    
    return this.http.post(`${baseUrl}/api/cat/${userId}`, category);
  }

  //Get All Category
  public categories(){
    return this.http.get(`${baseUrl}/api/cat/`);
  }

  //Get Category By Id
  public category(catId:any)
  {
    return this.http.get(`${baseUrl}/api/cat/${catId}`);
  }

  //Update Category
  public updateCategory(category:any)
  {
    return this.http.put(`${baseUrl}/api/cat/${category.catId}`, category);
  }

  //Delete Category
  public deleteCategory(catId:any)
  {
    return this.http.delete(`${baseUrl}/api/cat/${catId}`);
  }

  //Get total Category
  public totalCategory()
  {
    return this.http.get(`${baseUrl}/api/cat/totalcategory`);
  }

}
