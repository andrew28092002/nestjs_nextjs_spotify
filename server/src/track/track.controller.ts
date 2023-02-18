import { Body, Controller, Post } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly TrackService: TrackService) {}

  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.TrackService.create(dto);
  }
}
