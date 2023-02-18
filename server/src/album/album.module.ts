import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from './schemas/album.schemas';

@Module({
  providers: [AlbumService],
  controllers: [AlbumController],
  imports: [
    MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }]),
  ],
})
export class AlbumModule {}
