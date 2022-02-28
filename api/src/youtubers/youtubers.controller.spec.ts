import { Test, TestingModule } from '@nestjs/testing';
import { YoutubersController } from './youtubers.controller';

describe('YoutubersController', () => {
  let controller: YoutubersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoutubersController],
    }).compile();

    controller = module.get<YoutubersController>(YoutubersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
