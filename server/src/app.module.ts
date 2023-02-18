import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackModule } from './track/track.module';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    TrackModule,
    AlbumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
