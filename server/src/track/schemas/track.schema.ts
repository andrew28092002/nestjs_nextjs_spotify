import { Field, ID, ObjectType } from '@nestjs/graphql';
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
  @Field()
  name: string;

  @Prop({required: true})
  @Field()
  artist: string;

  @Prop({required: true})
  @Field()
  text: string;

  @Prop({default: 0})
  @Field()
  listens: number;

  @Prop()
  @Field()
  picture: string;

  @Prop()
  @Field()
  audio: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }] })
  @Field(type => [Comment])
  comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
