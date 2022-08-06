import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialsModule } from './modules/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EnterNameComponent } from './components/dialog-passing/enter-name/enter-name.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogPassingPageComponent } from './components/dialog-passing/dialog-passing-page/dialog-passing-page.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { DisplayEnvironmentComponent } from './components/display-environment/display-environment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EnterNameComponent,
    DialogPassingPageComponent,
    ParentComponent,
    ChildComponent,
    DisplayEnvironmentComponent
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
