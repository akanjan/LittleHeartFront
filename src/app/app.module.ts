import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CustomerDashboardComponent } from './pages/customer/customer-dashboard/customer-dashboard.component';
import { SellerDashboardComponent } from './pages/seller/seller-dashboard/seller-dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { AddCategoryComponent } from './pages/admin/dialog/add-category/add-category.component';
import { AddProductComponent } from './pages/admin/dialog/add-product/add-product.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdUserDetComponent } from './pages/admin/ad-user-det/ad-user-det.component';
import { AdCategoryDetComponent } from './pages/admin/ad-category-det/ad-category-det.component';
import { AdProductDetComponent } from './pages/admin/ad-product-det/ad-product-det.component';
import {MatListModule} from '@angular/material/list';
import { UserSidebarComponent } from './pages/admin/sidebar/user-sidebar/user-sidebar.component';
import { UserComponent } from './pages/user/user.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { UpdateUserComponent } from './pages/admin/dialog/update-user/update-user.component';
import { RulesRegulationsComponent } from './pages/admin/rules-regulations/rules-regulations.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxSpinnerModule } from "ngx-spinner";
import {MatSelectInfiniteScrollModule} from 'ng-mat-select-infinite-scroll';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductNavbarComponent } from './pages/product-navbar/product-navbar.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import { CartDialogComponent } from './pages/cart-dialog/cart-dialog.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ForgotpwdVerifyOtpComponent } from './components/forgotpwd-verify-otp/forgotpwd-verify-otp.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CategorySidebarComponent } from './pages/admin/sidebar/category-sidebar/category-sidebar.component';
import { AllCategoryComponent } from './pages/category/all-category/all-category.component';
import { ViewCategoryComponent } from './pages/category/view-category/view-category.component';
import { CatAddCategoryComponent } from './pages/category/cat-add-category/cat-add-category.component';
import { UpdateCategoryComponent } from './pages/category/update-category/update-category.component';
import { DeleteCategoryComponent } from './pages/category/delete-category/delete-category.component';
import { ToastrModule } from 'ngx-toastr';
import { ProductSidebarComponent } from './pages/admin/sidebar/product-sidebar/product-sidebar.component';
import { AllProductComponent } from './pages/product_s/all-product/all-product.component';
import { UploadProdImageComponent } from './pages/product_s/upload-prod-image/upload-prod-image.component';
import { ProdAddProductComponent } from './pages/product_s/prod-add-product/prod-add-product.component';
import { UpdateProductComponent } from './pages/product_s/update-product/update-product.component';
import { DeleteProductComponent } from './pages/product_s/delete-product/delete-product.component';
import { ViewProductComponent } from './pages/product_s/view-product/view-product.component';
import { SellerSidebarComponent } from './pages/seller/seller-sidebar/seller-sidebar.component';
import { ViewProductDetComponent } from './pages/view-product-det/view-product-det.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CustomerSidebarComponent } from './pages/customer/customer-sidebar/customer-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    CustomerDashboardComponent,
    SellerDashboardComponent,
    ProductsComponent,
    AddCategoryComponent,
    AddProductComponent,
    ProfileComponent,
    AdUserDetComponent,
    AdCategoryDetComponent,
    AdProductDetComponent,
    UserSidebarComponent,
    UserComponent,
    UpdateUserComponent,
    RulesRegulationsComponent,
    ProductNavbarComponent,
    CartDialogComponent,
    CheckoutComponent,
    CartDetailComponent,
    VerifyEmailComponent,
    VerifyOtpComponent,
    ForgotpwdVerifyOtpComponent,
    ForgotPasswordComponent,
    CategorySidebarComponent,
    AllCategoryComponent,
    ViewCategoryComponent,
    CatAddCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    ProductSidebarComponent,
    AllProductComponent,
    UploadProdImageComponent,
    ProdAddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewProductComponent,
    SellerSidebarComponent,
    ViewProductDetComponent,
    CustomerSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    MatSelectInfiniteScrollModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatBadgeModule,
    NgxUiLoaderModule,
    ToastrModule.forRoot(),
    MatSliderModule,
    MatCheckboxModule,
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
