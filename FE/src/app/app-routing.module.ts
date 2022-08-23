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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
