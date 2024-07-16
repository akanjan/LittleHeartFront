import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpwdVerifyOtpComponent } from './components/forgotpwd-verify-otp/forgotpwd-verify-otp.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { AdCategoryDetComponent } from './pages/admin/ad-category-det/ad-category-det.component';
import { AdProductDetComponent } from './pages/admin/ad-product-det/ad-product-det.component';
import { AdUserDetComponent } from './pages/admin/ad-user-det/ad-user-det.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { RulesRegulationsComponent } from './pages/admin/rules-regulations/rules-regulations.component';
import { AllCategoryComponent } from './pages/category/all-category/all-category.component';
import { CatAddCategoryComponent } from './pages/category/cat-add-category/cat-add-category.component';
import { DeleteCategoryComponent } from './pages/category/delete-category/delete-category.component';
import { UpdateCategoryComponent } from './pages/category/update-category/update-category.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CustomerDashboardComponent } from './pages/customer/customer-dashboard/customer-dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { AllProductComponent } from './pages/product_s/all-product/all-product.component';
import { DeleteProductComponent } from './pages/product_s/delete-product/delete-product.component';
import { ProdAddProductComponent } from './pages/product_s/prod-add-product/prod-add-product.component';
import { UpdateProductComponent } from './pages/product_s/update-product/update-product.component';
import { UploadProdImageComponent } from './pages/product_s/upload-prod-image/upload-prod-image.component';
import { ViewProductComponent } from './pages/product_s/view-product/view-product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SellerDashboardComponent } from './pages/seller/seller-dashboard/seller-dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';
import { ViewProductDetComponent } from './pages/view-product-det/view-product-det.component';
import { AdminGuard } from './services/admin.guard';
import { CustomerGuard } from './services/customer.guard';
import { SellerGuard } from './services/seller.guard';

const routes: Routes = [
  {
    path:"",
    // component:HomeComponent,
    component:ProductsComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate: [AdminGuard],
  },
  {
    path:'admin/user',
    component:AdUserDetComponent,
    canActivate: [AdminGuard],
    children:[
      {
        path:'',
        component:RulesRegulationsComponent
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'users',
        component:UserComponent,
      },
    ]
  },
  {
    path:'admin/category',
    component:AdCategoryDetComponent,
    canActivate: [AdminGuard],
    children:[
      {
        path:'all',
        component:AllCategoryComponent,
      },
      {
        path:'add',
        component:CatAddCategoryComponent,
      },
      {
        path:'update',
        component:UpdateCategoryComponent,
      },
      {
        path:'delete',
        component:DeleteCategoryComponent,
      },
    ]
  },
  {
    path:'admin/products',
    component:AdProductDetComponent,
    canActivate: [AdminGuard],
    children:[
      {
        path:'all',
        component:AllProductComponent,
      },
      {
        path:'upload',
        component:UploadProdImageComponent,
      },
      {
        path:'add',
        component:ProdAddProductComponent,
      },
      {
        path:'update',
        component:UpdateProductComponent,
      },
      {
        path:'delete',
        component:DeleteProductComponent,
      },
      {
        path:'all/view/:prodId',
        component:ViewProductComponent,
      },
    ]
  },
  {
    path:'customer-dashboard',
    component:CustomerDashboardComponent,
    canActivate:[CustomerGuard],
    children:[
      {
        path:'category',
        component:ProductsComponent,
      },
    ]
  },
  {
    path:'seller-dashboard',
    component:SellerDashboardComponent,
    canActivate:[SellerGuard],
    children:[
      {
        path:'category',
        component:AllCategoryComponent,
      },
      {
        path:'products',
        component:AllProductComponent,
      },
      {
        path:'upload',
        component:UploadProdImageComponent,
      },
      {
        path:'add',
        component:ProdAddProductComponent,
      },
      {
        path:'update',
        component:UpdateProductComponent,
      },
      {
        path:'delete',
        component:DeleteProductComponent,
      },
      {
        path:'all/view/:prodId',
        component:ViewProductComponent,
      },
    ]
  },
  {
    path:'products',
    component:ProductsComponent,
    pathMatch:'full'
  },
  {
    path:'checkout',
    component:CheckoutComponent,
    pathMatch:'full',
  },
  {
    path:'verify-email',
    component:VerifyEmailComponent,
    pathMatch:'full',
  },
  {
    path:'verify-otp',
    component:VerifyOtpComponent,
    pathMatch:'full',
  },
  {
    path:'forgotpwd-verify-otp',
    component:ForgotpwdVerifyOtpComponent,
    pathMatch:'full',
  },
  {
    path:'forgotpwd',
    component:ForgotPasswordComponent,
    pathMatch:'full',
  },
  {
    path:'proddet/:prodId',
    component:ViewProductDetComponent,
    pathMatch:'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
