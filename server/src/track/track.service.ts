import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { AddCommentDto } from './dto/add-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Track, TrackDocument } from './schemas/track.schema';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private readonly TrackModel: Model<TrackDocument>,
    @InjectModel(Comment.name)
    private readonly CommentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateTrackDto): Promise<Track> {
    const track = await this.TrackModel.create(dto);

    return track;
  }

  async getAll(): Promise<Track[]> {
    const tracks = await this.TrackModel.find();

    return tracks;
  }

  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.TrackModel.findById(id);

    return track;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    await this.TrackModel.findByIdAndDelete(id);

    return id;
  }

  async addComment(dto: AddCommentDto): Promise<Comment> {
    const track = await this.TrackModel.findById(dto.trackId);
    const comment = await this.CommentModel.create(dto);
    
    track.comments.push(comment.id);
    await track.save();

    return comment;
  }
}
