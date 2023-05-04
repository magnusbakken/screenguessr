import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, MapComponent],
  imports: [BrowserModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
