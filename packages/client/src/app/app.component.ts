import { Component } from '@angular/core';
import { ImageData } from '@screenguessr/api-types';

@Component({
  selector: 'screenguessr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentImageData: ImageData | null = null;

  public onSeedGenerated(imageData: ImageData): void {
    this.currentImageData = imageData;
  }
}
