import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';
import { AddCommentDto } from './dto/add-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly TrackService: TrackService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(
    @Body() dto: CreateTrackDto,
    @UploadedFiles()
    files: { picture?: Express.Multer.File[]; audio?: Express.Multer.File[] },
  ) {
    const { picture, audio } = files;
    return this.TrackService.create(dto, picture, audio);
  }

  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.TrackService.getAll(count, offset);
  }

  @Get('search')
  search(@Query('query') query: string) {
    return this.TrackService.search(query);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.TrackService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.TrackService.delete(id);
  }

  @Post('comment')
  addComment(@Body() dto: AddCommentDto) {
    return this.TrackService.addComment(dto);
  }

  @Get('listen/:id')
  listen(@Param('id') id: ObjectId) {
    return this.TrackService.listen(id);
  }
}
