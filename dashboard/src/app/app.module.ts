import { PupilsComponent } from './feature/pupils/pupils.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponent } from './shared/shared.component';
import { FeatureComponent } from './feature/feature.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SchoolComponent } from './feature/school/school.component';
import { ListComponent } from './feature/pupils/list/list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    FeatureComponent,
    NavbarComponent,
    SchoolComponent,
    PupilsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class DemoMaterialModule {}
