import { Component, ViewChild } from '@angular/core';
import { Coordinates, ImageData } from '@screenguessr/api-types';
import { GuessResult } from './types';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'screenguessr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentImageData: ImageData | null = null;
  public currentMarker: Coordinates | null = null;
  public currentResult: GuessResult | null = null;

  @ViewChild(MapComponent) private readonly mapComponent: MapComponent | undefined;

  public onSeedGenerated(imageData: ImageData): void {
    this.currentImageData = imageData;
    this.currentMarker = null;
    this.currentResult = null;
    this.updateMapZoom();
  }

  public onMarkerPlaced(marker: Coordinates): void {
    this.currentMarker = marker;
  }

  public onGuessed(result: GuessResult): void {
    this.currentResult = result;
    this.updateMapZoom();
  }

  private updateMapZoom() {
    const mapComponent = this.mapComponent;
    if (mapComponent !== undefined) {
      setTimeout(() => mapComponent.updateZoom());
    }
  }
}
