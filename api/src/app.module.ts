import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubersController } from './youtubers/youtubers.controller';

@Module({
  imports: [],
  controllers: [AppController, YoutubersController],
  providers: [AppService],
})
export class AppModule {}
