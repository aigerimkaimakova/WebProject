import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_helpers/auth.guard';
import {ImageDetailComponent} from './image-detail/image-detail.component';
import {ImageListComponent} from './image-list/image-list.component';
import {CategoryComponent} from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import {CreateImageComponent} from './create-image/create-image.component';


const routes: Routes = [
  { path: '', component: ImageListComponent },
  // { path: 'admin', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]  },
  { path: 'images', component: ImageListComponent},
  { path: 'category/:id/image-id/:id', component: ImageDetailComponent},
  { path: 'category/:id', component: CategoryComponent},
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'edit/:id', component: CreateImageComponent },
  { path: '**', redirectTo: '' },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
