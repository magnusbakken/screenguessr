import { CallableOptions, onCall } from 'firebase-functions/v2/https';
import { randomInt } from 'crypto';
import path from 'node:path/win32';
import { ImageData } from '@screenguessr/api-types';

import images from '../db/images.json';

const Options: CallableOptions = { region: 'europe-west3' };

export const generateSeed = onCall<unknown, ImageData>(Options, () => {
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
  return 'https://firebasestorage.googleapis.com/v0/b/screenguessr/o/' + path.basename(filePath) + '?alt=media';
}
