import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { TempPageComponent } from './components/authentication/temp-page/temp-page.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TempPageComponent,  canActivate: [AuthGuard]},
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
