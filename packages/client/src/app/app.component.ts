import { Component } from '@angular/core';
import { Coordinates, ImageData } from '@screenguessr/api-types';
import { GuessResult } from './types';

@Component({
  selector: 'screenguessr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentImageData: ImageData | null = null;
  public currentMarker: Coordinates | null = null;
  public currentResult: GuessResult | null = null;

  public onSeedGenerated(imageData: ImageData): void {
    this.currentImageData = imageData;
  }

  public onMarkerPlaced(marker: Coordinates): void {
    this.currentMarker = marker;
  }

  public onGuessed(result: GuessResult): void {
    this.currentResult = result;
  }
}
