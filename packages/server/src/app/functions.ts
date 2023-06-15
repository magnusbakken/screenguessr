import { onCall } from 'firebase-functions/v2/https';
import { randomInt } from 'crypto';
import { ImageData } from '@screenguessr/api-types';

import images from '../db/images.json';
import path from 'path';

export const generateSeed = onCall<unknown, ImageData>({ region: 'europe-west3' }, () => {
  const idx = randomInt(images.images.length);
  const image = images.images[idx];
  const imageData: ImageData = {
    fileName: image.original_path,
    coordinates: image.coordinates,
    url: createUrl(image.path)
  };

  return imageData;
});

function createUrl(filePath: string): string {
  return 'https://storage.cloud.google.com/screenguessr/' + path.basename(filePath);
}
