import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Comment } from './comment.schema';

export type TrackDocument = HydratedDocument<Track>;

@ObjectType()
@Schema()
export class Track {
  @Field(type => ID)
  _id: string

  @Prop({required: true})
  @Field(type => String)
  name: string;

  @Prop({required: true})
  @Field(type => String)
  artist: string;

  @Prop({required: true})
  @Field(type => String)
  text: string;

  @Prop({default: 0})
  @Field(type => Int)
  listens: number;

  @Prop()
  @Field(type => String)
  picture: string;

  @Prop()
  @Field(type => String)
  audio: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }] })
  @Field(type => [Comment])
  comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
