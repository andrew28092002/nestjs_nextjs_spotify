import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album, AlbumDocument } from './schemas/album.schemas';

@Injectable()
export class AlbumService {
  constructor(
    @InjectModel(Album.name) private readonly AlbumModel: Model<AlbumDocument>,
  ) {}

  
}
