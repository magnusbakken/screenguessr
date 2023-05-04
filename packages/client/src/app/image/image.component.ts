import { Component, Input } from '@angular/core';

@Component({
  selector: 'screenguessr-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() public imageUrl = '';
}
