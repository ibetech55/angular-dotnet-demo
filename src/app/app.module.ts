import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ViewMakesComponent } from './Components/view-makes/view-makes.component';
import { CreateMakeComponent } from './Components/create-make/create-make.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewMakesComponent,
    CreateMakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"makes",
        component:ViewMakesComponent
      },
      {
        path:"createMake",
        component:CreateMakeComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
