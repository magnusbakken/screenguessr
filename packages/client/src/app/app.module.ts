import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFunctions, getFunctions } from '@angular/fire/functions';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ImageComponent } from './image/image.component';
import { GeneratorComponent } from './generator/generator.component';
import { GuessComponent } from './guess/guess.component';
import { ResultComponent } from './result/result.component';
import { environment } from '../environments/environment';

export function provideFirebaseFunctions(region: string) {
  return importProvidersFrom(provideFunctions(() => {
    const func = getFunctions();
    func.region = region;
    return func;  
  }));
}

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ImageComponent,
    GeneratorComponent,
    GuessComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
],
  providers: [
    provideFirebaseFunctions('europe-west3'),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
