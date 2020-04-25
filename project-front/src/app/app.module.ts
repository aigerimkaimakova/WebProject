import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fakeBackendProvider } from './_helpers/fake-backend';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import {  ErrorInterceptor } from './_helpers/error.interceptor';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AlertComponent } from './_components/alert.component';
import { CategoryComponent } from './category/category.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageListComponent } from './image-list/image-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CreateImageComponent } from './create-image/create-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AlertComponent,
    CategoryComponent,
    ImageDetailComponent,
    ImageListComponent,
    NavigationComponent,
    CartComponent,
    ShippingComponent,
    CreateImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
