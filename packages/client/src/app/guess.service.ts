import { Injectable } from '@angular/core';
import { Coordinates, ImageData } from '@screenguessr/api-types';
import { GuessResult } from './types';

@Injectable({
  providedIn: 'root'
})
export class GuessService {
  public guess(imageData: ImageData, marker: Coordinates): GuessResult {
    const distance = calculateDistance(imageData.coordinates, marker);
    return {
      actual: imageData.coordinates,
      guessed: marker,
      midpoint: calculateMidpoint(imageData.coordinates, marker),
      distance,
      points: calculatePoints(distance),
      filePath: imageData.fileName,
    };
  }
}

function calculateDistance(actual: Coordinates, guessed: Coordinates): number {
  // See https://www.movable-type.co.uk/scripts/latlong.html
  const φ1 = toRadians(actual.latitude);
  const φ2 = toRadians(guessed.latitude);
  const Δφ = toRadians(guessed.latitude - actual.latitude);
  const Δλ = toRadians(guessed.longitude - actual.longitude);

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return toMeters(c);
}

function calculateMidpoint(actual: Coordinates, guessed: Coordinates): Coordinates {
  // See https://stackoverflow.com/a/4656937/1696533
  const φ1 = toRadians(actual.latitude);
  const φ2 = toRadians(guessed.latitude);
  const λ1 = toRadians(actual.longitude);
  const Δλ = toRadians(guessed.longitude - actual.longitude);

  const Bx = Math.cos(φ2) * Math.cos(Δλ);
  const By = Math.cos(φ2) * Math.sin(Δλ);
  const φ3 = Math.atan2(Math.sin(φ1) + Math.sin(φ2), Math.sqrt((Math.cos(φ1) + Bx) * (Math.cos(φ1) + Bx) + By * By));
  const λ3 = λ1 + Math.atan2(By, Math.cos(φ1) + Bx);

  return {
    latitude: toDegrees(φ3),
    longitude: toDegrees(λ3)
  };
}

function toRadians(degrees: number): number {
  return degrees * Math.PI / 180;
}

function toDegrees(radians: number): number {
  return radians * 180 / Math.PI;
}

function toMeters(radians: number): number {
  return radians * 6371e3;
}

function calculatePoints(distance: number): number {
  // TODO: different algorithm here
  return distance;
}