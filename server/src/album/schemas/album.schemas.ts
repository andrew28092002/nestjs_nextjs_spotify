import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type AlbumDocument = HydratedDocument<Album>

@Schema()
export class Album {

}

export const AlbumSchema = SchemaFactory.createForClass(Album)