import { Injectable, inject } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { ImageData } from '@screenguessr/api-types';

@Injectable({
  providedIn: 'root'
})
export class SeedGeneratorService {
  public constructor(
    private readonly functions: Functions = inject(Functions)
  ) {}

  public async generateSeed(): Promise<ImageData> {
    const result = await httpsCallable<unknown, ImageData>(this.functions, 'generateSeed')();
    return result.data;
  }
}
