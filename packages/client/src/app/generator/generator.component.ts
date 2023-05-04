import { Component, EventEmitter, Output } from '@angular/core';
import { ImageData } from '@screenguessr/api-types';

import { SeedGeneratorService } from '../seed-generator.service';

@Component({
  selector: 'screenguessr-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent {
  @Output() public readonly seedGenerated = new EventEmitter<ImageData>();

  public constructor(private readonly service: SeedGeneratorService) {}

  public async onStart(): Promise<void> {
    const imageData = await this.service.generateSeed();
    this.seedGenerated.emit(imageData);
  }
}
