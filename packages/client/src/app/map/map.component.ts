import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Coordinates } from '@screenguessr/api-types';
import { GuessResult } from '../types';

const DefaultCoordinates: google.maps.LatLngLiteral = { lat: 64, lng: 18 };
const DefaultZoom = 4;

@Component({
  selector: 'screenguessr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() public currentMarker: Coordinates | null = null;
  @Input() public currentResult: GuessResult | null = null;

  @Output() public readonly markerPlaced = new EventEmitter<Coordinates>();

  @ViewChild(GoogleMap) private readonly map: GoogleMap | undefined;

  public readonly options: google.maps.MapOptions = {
    draggableCursor: 'crosshair',
    fullscreenControl: false,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: false,
  };

  public center = DefaultCoordinates;
  public zoom = DefaultZoom;

  public placeMarker(event: google.maps.MapMouseEvent | google.maps.IconMouseEvent): void {
    if (event.latLng !== null) {
      this.markerPlaced.emit({ latitude: event.latLng.lat(), longitude: event.latLng.lng() });
    }
  }

  public updateZoom(): void {
    if (this.map === undefined) {
      return;
    }

    if (this.currentResult === null) {
      // The result has been removed. Reset zoom/center to default.
      this.map.panTo(DefaultCoordinates);
      this.map.googleMap?.setZoom(DefaultZoom); // This one isn't exposed in the Angular wrapper.
    } else {
      // A new result has arrived. Zoom to fit both the guess and the result.
      const east = Math.max(this.currentResult.guessed.longitude, this.currentResult.actual.longitude);
      const west = Math.min(this.currentResult.guessed.longitude, this.currentResult.actual.longitude);
      const north = Math.max(this.currentResult.guessed.latitude, this.currentResult.actual.latitude);
      const south = Math.min(this.currentResult.guessed.latitude, this.currentResult.actual.latitude);
      this.map.fitBounds({ east, west, north, south });
    }
  }
}
