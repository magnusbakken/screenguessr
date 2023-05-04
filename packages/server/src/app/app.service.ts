import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { ImageData } from '@screenguessr/api-types';

import images from '../db/images.json';
import path from 'path';

@Injectable()
export class AppService {
  public getRandomImage(): ImageData {
    const idx = randomInt(images.images.length);
    const image = images.images[idx];
    return {
      fileName: image.original_path,
      coordinates: image.coordinates,
      url: createUrl(image.path)
    };
  }
}

function createUrl(filePath: string): string {
  return '/api/images/' + path.basename(filePath);
}