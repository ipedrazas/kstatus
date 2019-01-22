import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusHeaderComponent } from './status-header/status-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceStatusComponent } from './service-status/service-status.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusHeaderComponent,
    ServiceStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // HttpClientModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
