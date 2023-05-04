import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Coordinates, ImageData } from '@screenguessr/api-types';

import { GuessService } from '../guess.service';
import { GuessResult } from '../types';

@Component({
  selector: 'screenguessr-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss'],
})
export class GuessComponent {
  @Input() public imageData: ImageData | null = null;
  @Input() public marker: Coordinates | null = null;

  @Output() public readonly guessed = new EventEmitter<GuessResult>();

  public constructor(private readonly service: GuessService) {}

  public onGuess(): void {
    if (this.imageData !== null && this.marker !== null) {
      const result = this.service.guess(this.imageData, this.marker)
      this.guessed.emit(result);
    }
  }
}
