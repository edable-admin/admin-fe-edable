import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { AuthService } from "./shared/services/auth.service";

//------------- Upload Image Component ----------------------------//
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { DragDropDirectiveDirective } from './components/upload-image/drag-drop-directive/drag-drop-directive.directive';
//--------------------------------------------------------------------//

//---------------------------- Login modules -------------------------------//
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { TempPageComponent } from './components/authentication/temp-page/temp-page.component';

//--------------------------------------------------------------------------//

//-------------------- FireBase libs ---------------------------------------//
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
//---------------------------------------------------------------------------//
import { environment } from '../environments/environment';

const config = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    OrganisationComponent,
    UploadImageComponent,
    DragDropDirectiveDirective,
    SignInComponent,
    ForgotPasswordComponent,
    TempPageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(config)),
    provideFirestore(() => getFirestore()),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    provideStorage(() => getStorage())
  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebaseConfig.storageBucket },AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// rules_version = '1';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read: 
//       if true;
// 		}
  
//     match /databases/{database}/documents {
//     match /{Organisations}/{document=**} {
//       allow create, update: 
//       if
//       request.resource.data.name is string ||
//       request.resource.data.name == null &&
//       request.resource.data.description is string ||
//       request.resource.data.description == null &&
//       request.resource.data.summary is string ||
//       request.resource.data.summary == null &&
//       request.resource.data.ABN is number ||
//       request.resource.data.ABN == null &&
//       request.resource.data.phone is string ||
//       request.resource.data.phone == null &&
//       request.resource.data.website is string ||
//       request.resource.data.website == null &&
//       request.resource.data.img is string ||
//       request.resource.data.img == null &&
//       request.resource.data.activeStatus is bool &&
//       request.resource.data.createdAt != null &&
//       request.resource.data.updatedAt is timestamp ||
//       request.resource.data.updatedAt == null;
//     	}
// 		}
// 	}
// }