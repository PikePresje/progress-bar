import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgxProgressBarModule } from 'ngx-progress-bar' 
import { NgxProgressBarModule } from '@pikepresje/progress-bar'; 
import { MaterialExtendedModule } from 'src/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxProgressBarModule,
    MaterialExtendedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
