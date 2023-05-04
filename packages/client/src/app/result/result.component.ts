import { Component, Input } from '@angular/core';
import { GuessResult } from '../types';

@Component({
  selector: 'screenguessr-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  @Input() public result: GuessResult | null = null;
}
