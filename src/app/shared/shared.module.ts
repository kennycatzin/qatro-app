import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
SidebarComponent,
BreadcrumbsComponent,
FooterComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule,
    CommonModule

  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent
  ],

  providers: [],
  bootstrap: []
})
export class sharedModule { }
