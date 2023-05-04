import { Component, EventEmitter, Output } from '@angular/core';
import { Coordinates } from '@screenguessr/api-types';

@Component({
  selector: 'screenguessr-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Output() public readonly markerPlaced = new EventEmitter<Coordinates>();

  public readonly options: google.maps.MapOptions = {
    draggableCursor: 'crosshair',
    fullscreenControl: false,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: false
  };

  public marker: Coordinates | null = null;

  public placeMarker(event: google.maps.MapMouseEvent | google.maps.IconMouseEvent): void {
    if (event.latLng !== null) {
      this.marker = { latitude: event.latLng.lat(), longitude: event.latLng.lng() };
      this.markerPlaced.emit(this.marker);
    }
  }
}
