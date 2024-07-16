import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, private loginService:LoginService) { }

  //Add Product
  public addProduct(catId:any, product: any)
  {
    let userId=this.loginService.getUser().id;
    console.log(userId);
    let categoryId = catId;
    return this.http.post(`${baseUrl}/api/user/${userId}/category/${categoryId}/pro`, product);
  }

  //Get All Products
  public getAllProduct(page:any)
  {
    return this.http.get(`${baseUrl}/api/product?pageNumber=${page}`);
  }

  //Get Product image
  public getProductImg(imgName:any)
  {
    return this.http.get(`${baseUrl}/api/product/image/${imgName}`);
  }

  //Get Product By Category Id
  public getProductByCatId(catId:any)
  {
    return this.http.get(`${baseUrl}/api/category/${catId}/product`);
  }

  //Get Product By Product Id
  public getProductByProdId(prodId:any)
  {
    return this.http.get(`${baseUrl}/api/product/${prodId}`);
  }

  //Upload Product Image
  public uploadProdImage(formData:any,prodId:any)
  {
    
    return this.http.post(`${baseUrl}/api/product/image/upload/${prodId}`, formData);
  }

  //Update Product
  public updateProduct(prodId:any, product:any)
  {
    return this.http.put(`${baseUrl}/api/product/${prodId}`, product)
  }

  //Delete Product
  public deleteProduct(prodId:any)
  {
    return this.http.delete(`${baseUrl}/api/product/${prodId}`); 
  }
}
