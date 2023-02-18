import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly TrackService: TrackService) {}

  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.TrackService.create(dto);
  }

  @Get()
  getAll(){
    return this.TrackService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId){
    return this.TrackService.getOne(id)
  }
}
