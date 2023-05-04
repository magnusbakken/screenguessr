import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageData } from '@screenguessr/api-types';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeedGeneratorService {
  public constructor(private readonly http: HttpClient) { }

  public generateSeed(): Promise<ImageData> {
    return firstValueFrom(this.http.post<ImageData>('http://localhost:3000/api/seeds', {}));
  }
}
