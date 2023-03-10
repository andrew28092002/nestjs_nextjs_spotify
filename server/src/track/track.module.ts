import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './schemas/track.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { FileModule } from 'src/file/file.module';
import { TrackResolver } from './track.resolver';

@Module({
  providers: [TrackService, TrackResolver],
  controllers: [TrackController],
  imports: [
    MongooseModule.forFeature([
      { name: Track.name, schema: TrackSchema },
      { name: Comment.name, schema: CommentSchema },
    ]),
    FileModule,
  ],
})
export class TrackModule {}
