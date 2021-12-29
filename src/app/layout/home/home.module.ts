import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
 

  ],
  providers: [HttpClient],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // BrowserModule,
    FormsModule, HttpClientModule, ReactiveFormsModule,
  ],


})
export class HomeModule { }
