import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Coordinates } from '@screenguessr/api-types';
import { GuessResult } from '../types';

@Component({
  selector: 'screenguessr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnChanges {
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

  public marker: Coordinates | null = null;
  public center: google.maps.LatLngLiteral = { lat: 64, lng: 18 };
  public zoom = 4;

  public ngOnChanges(): void {
    this.zoomToAnswer();
  }

  public placeMarker(event: google.maps.MapMouseEvent | google.maps.IconMouseEvent): void {
    if (event.latLng !== null) {
      this.marker = { latitude: event.latLng.lat(), longitude: event.latLng.lng() };
      this.markerPlaced.emit(this.marker);
    }
  }

  private zoomToAnswer(): void {
    if (this.currentResult !== null && this.map !== undefined) {
      const east = Math.max(this.currentResult.guessed.longitude, this.currentResult.actual.longitude);
      const west = Math.min(this.currentResult.guessed.longitude, this.currentResult.actual.longitude);
      const north = Math.max(this.currentResult.guessed.latitude, this.currentResult.actual.latitude);
      const south = Math.min(this.currentResult.guessed.latitude, this.currentResult.actual.latitude);
      this.map.fitBounds({ east, west, north, south });
    }
  }
}
