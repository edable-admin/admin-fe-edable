import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AuthService } from "./shared/services/auth.service";
//------------- Upload Image Component ----------------------------//
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { DragDropDirectiveDirective } from './components/upload-image/drag-drop-directive/drag-drop-directive.directive';
//-------------------- FireBase libs ---------------------------------------//
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAppCheck } from '@angular/fire/app-check';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { TempPageComponent } from './components/authentication/temp-page/temp-page.component';
import { MainComponent } from './components/main/main.component';

import { AddOrganisationDialog } from './components/organisation/add-organisation/add-organisation-dialog';
import { EditOrganisationDialog } from './components/organisation/edit-organisation/edit-organisation-dialog';
import { RemoveOrganisationDialog } from './components/organisation/remove-organisation/remove-organisation-dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { DonationItemComponent } from './components/donation-item/donation-item.component';
import { AddDonationItemComponent } from './components/donation-item/add-donation-item/add-donation-item.component';
import { RemoveDonationItemComponent } from './components/donation-item/remove-donation-item/remove-donation-item.component';
import { UpdateItemsComponent } from './components/donation-item/update-donation-item/update-donation-item.component';
import { ViewDonationItemComponent } from './components/donation-item/view-donation-item/view-donation-item.component';
import { DonationItemTableComponent } from './components/donation-item/view-donation-item/donation-item-table/donation-item-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ViewItemDetailsComponent } from './components/donation-item/view-donation-item/view-item-details/view-item-details.component';
import { ExportCsvComponent } from './components/donation-item/view-donation-item/donation-item-table/export-csv/export-csv.component';
import { ReportsComponent } from './components/reports/reports.component';
import { WebdatarocksPivotModule } from 'ng-webdatarocks';
import { InfographicsSectionMobileComponent } from './components/organisation/infographics-section-mobile/infographics-section-mobile.component';
import { InfographicsAllOrgsGeneralDonationsMobileComponent } from './components/organisation/infographics-section-mobile/infographics-all-orgs-general-donations-mobile/infographics-all-orgs-general-donations-mobile.component';
import { InfographicsOrgGeneralDonationsMobileComponent } from './components/organisation/infographics-section-mobile/infographics-org-general-donations-mobile/infographics-org-general-donations-mobile.component';
import { InfographItemsDonationsMobileComponent } from './components/organisation/infographics-section-mobile/infograph-items-donations-mobile/infograph-org-items-donations-mobile.component';
import { InfographItemsDonationsComponent } from './components/organisation/infographics-section/infograph-items-donations/infograph-org-items-donations.component';
import { InfographicsSectionComponent } from './components/organisation/infographics-section/infographics-section.component';
import { InfographicsAllOrgsGeneralDonationsComponent } from './components/organisation/infographics-section/infographics-all-orgs-general-donations/infographics-all-orgs-general-donations.component';
import { InfographicsOrgGeneralDonationsComponent } from './components/organisation/infographics-section/infographics-org-general-donations/infographics-org-general-donations.component';
import { InfographicsAllOrgsItemDonationsComponent } from './components/organisation/infographics-section/infographics-all-orgs-item-donations/infographics-all-orgs-item-donations.component';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

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
    HeaderComponent,
    SidebarComponent,
    TransactionsComponent,
    MainComponent,
    AddOrganisationDialog,
    EditOrganisationDialog,
    RemoveOrganisationDialog,
    DonationItemComponent,
    AddDonationItemComponent,
    RemoveDonationItemComponent,
    UpdateItemsComponent,
    ViewDonationItemComponent,
    DonationItemTableComponent,
    ViewItemDetailsComponent,
    ExportCsvComponent,
    ReportsComponent,
    InfographItemsDonationsComponent,
    InfographicsSectionComponent,
    InfographicsAllOrgsGeneralDonationsComponent,
    InfographicsOrgGeneralDonationsComponent,
    InfographicsSectionMobileComponent,
    InfographicsAllOrgsGeneralDonationsMobileComponent,
    InfographicsOrgGeneralDonationsMobileComponent,
    InfographItemsDonationsMobileComponent,
    InfographicsAllOrgsItemDonationsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    provideFirebaseApp(() => initializeApp(config)),
    provideFirestore(() => getFirestore()),
    provideAppCheck(() => initializeAppCheck(getApp(), {
      provider: new ReCaptchaV3Provider(environment.recaptcha3SiteKey),
      isTokenAutoRefreshEnabled: true
    })),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    WebdatarocksPivotModule
  ],
  providers: [
    { provide: BUCKET, useValue: config.storageBucket }, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
