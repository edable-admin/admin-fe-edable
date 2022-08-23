import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { TempPageComponent } from './components/authentication/temp-page/temp-page.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { AuthGuard } from './shared/guard/auth.guard';
import {TransactionsComponent} from './components/transactions/transactions.component'
import { MainComponent } from './components/main/main.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialsModule} from './modules/materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

  // User canActivate with [AuthGuard] to secure endpoints and ensure user is logged in
  // { path: 'dashboard', component: OrganisationComponent,  canActivate: [AuthGuard]},
const routes: Routes = [
  // open routes
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  // protected routes. routes in main/... are protected by AuthGuard.
  {path:'main',component:MainComponent,canActivate:[AuthGuard],
    children:[
      { path: '', component: OrganisationComponent},
      { path: 'transaction', component: TransactionsComponent},
    ]
  }


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [],
})
export class AppRoutingModule { }
