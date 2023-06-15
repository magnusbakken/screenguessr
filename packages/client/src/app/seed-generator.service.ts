import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { getFunctions, httpsCallable } from '@angular/fire/functions';
import { ImageData } from '@screenguessr/api-types';

@Injectable({
  providedIn: 'root'
})
export class SeedGeneratorService {
  public constructor(private readonly app: FirebaseApp) { }

  public async generateSeed(): Promise<ImageData> {
    const result = await httpsCallable<unknown, ImageData>(getFunctions(this.app), 'generateSeed')();
    return result.data;
  }
}
