import { Injectable } from '@angular/core';
import { Coordinates, ImageData } from '@screenguessr/api-types';
import { GuessResult } from './types';

@Injectable({
  providedIn: 'root'
})
export class GuessService {
  public guess(imageData: ImageData, marker: Coordinates): GuessResult {
    return {
      actual: imageData.coordinates,
      guessed: marker,
      points: calculatePoints(imageData.coordinates, marker),
    };
  }
}

function calculatePoints(actual: Coordinates, guessed: Coordinates): number {
  const R = 6371e3; // metres
  const φ1 = actual.latitude * Math.PI/180; // φ, λ in radians
  const φ2 = guessed.latitude * Math.PI/180;
  const Δφ = (guessed.latitude - actual.latitude) * Math.PI/180;
  const Δλ = (guessed.longitude - actual.longitude) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c; // in metres
}
