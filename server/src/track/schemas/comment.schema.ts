import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Track } from "./track.schema";


export type CommentDocument = HydratedDocument<Comment>

@ObjectType()
@Schema()
export class Comment {
    @Field(type => ID)
    _id: string

    @Prop()
    @Field(type => String)
    username: string

    @Prop()
    @Field(type => String)
    text: string

    @Prop({type: [{type: Types.ObjectId, ref: 'Track'}]})
    @Field(type => [Track])
    track: Track
}

export const CommentSchema = SchemaFactory.createForClass(Comment)