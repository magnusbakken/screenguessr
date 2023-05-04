import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ImageData } from '@screenguessr/api-types';

import { AppService } from './app.service';

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Post('seeds')
  public generateSeed(): ImageData {
    return this.appService.getRandomImage();
  }
  
  @Get('images/:image')
  public getImage(@Param('image') image: string, @Res() res) {
    return res.sendFile(image, { root: 'packages/server/public/images' });
  }
}
