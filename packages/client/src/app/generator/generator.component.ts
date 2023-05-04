import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageData } from '@screenguessr/api-types';

import { SeedGeneratorService } from '../seed-generator.service';

@Component({
  selector: 'screenguessr-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit {
  @Output() public readonly seedGenerated = new EventEmitter<ImageData>();

  public constructor(private readonly service: SeedGeneratorService) {}

  public async ngOnInit(): Promise<void> {
    await this.start();
  }

  public async onStart(): Promise<void> {
    await this.start();
  }

  private async start(): Promise<void> {
    const imageData = await this.service.generateSeed();
    this.seedGenerated.emit(imageData);
  }
}
