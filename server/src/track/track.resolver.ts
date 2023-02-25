import { UploadedFiles, UseInterceptors } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AddCommentDto } from './dto/add-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { Track } from './schemas/track.schema';
import { TrackService } from './track.service';

@Resolver((of) => Track)
export class TrackResolver {
  constructor(private readonly TrackService: TrackService) {}

  @Mutation((returns) => Track)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(
    @Args('create') dto: CreateTrackDto,
    @UploadedFiles()
    files?: { picture?: Express.Multer.File[]; audio?: Express.Multer.File[] },
  ) {
    const { picture, audio } = files;
    return this.TrackService.create(dto, picture, audio);
  }

  @Query((returns) => [Track])
  getAll(
    @Args('count', {type: () => Int, nullable: true}) count?: number,
    @Args('offset', {type: () => Int, nullable: true}) offset?: number
  ){
    return this.TrackService.getAll(count, offset)
  }

  @Query((returns) => Track)
  getOne(
    @Args('id', {type: () => String}) id: string
  ){
    return this.TrackService.getOne(id)
  }

  @Query((returns) => [Track])
  search(
    @Args('query', {type: () => String}) query: string
  ){
    return this.TrackService.search(query)
  }

  @Query((returns) => String)
  delete(
    @Args('id', {type: () => String}) id: string
  ){
    return this.TrackService.delete(id)
  }

  @Mutation((returns) => String)
  commment(
    @Args('comment') dto: AddCommentDto
  ){
    return this.TrackService.addComment(dto)
  }

  @Query((returns) => Track)
  listen(
    @Args('id', {type: () => String}) id: string
  ){
    return this.TrackService.listen(id)
  }
}
