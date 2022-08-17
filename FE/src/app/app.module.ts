import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { DragDropDirectiveDirective } from './components/upload-image/drag-drop-directive/drag-drop-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    OrganisationComponent,
    UploadImageComponent,
    DragDropDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
