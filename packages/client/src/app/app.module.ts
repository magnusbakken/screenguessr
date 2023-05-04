import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MapComponent } from './map/map.component';
import { ImageComponent } from './image/image.component';
import { GeneratorComponent } from './generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    MapComponent,
    ImageComponent,
    GeneratorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
