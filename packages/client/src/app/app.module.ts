import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ImageComponent } from './image/image.component';
import { GeneratorComponent } from './generator/generator.component';
import { GuessComponent } from './guess/guess.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ImageComponent,
    GeneratorComponent,
    GuessComponent,
    ResultComponent,
  ],
  imports: [CommonModule, BrowserModule, HttpClientModule, GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
