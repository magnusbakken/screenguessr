import * as express from 'express';
import { onRequest } from 'firebase-functions/v2/https';
import { randomInt } from 'crypto';
import { ImageData } from '@screenguessr/api-types';

import images from '../db/images.json';
import path from 'path';

export const generateSeed = onRequest((_, response: express.Response<ImageData>) => {
  const idx = randomInt(images.images.length);
  const image = images.images[idx];
  const imageData: ImageData = {
    fileName: image.original_path,
    coordinates: image.coordinates,
    url: createUrl(image.path)
  };

  response.send(imageData);
});

function createUrl(filePath: string): string {
  return 'https://storage.cloud.google.com/screenguessr/' + path.basename(filePath);
}