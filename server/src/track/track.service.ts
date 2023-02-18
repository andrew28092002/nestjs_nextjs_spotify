import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Track, TrackDocument } from './schemas/track.schema';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private readonly TrackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private readonly CommentModel: Model<CommentDocument>
  ) {}

  async create(){
    const track = await this.TrackModel.create()
  }
}