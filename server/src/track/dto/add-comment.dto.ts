import { ArgsType, Field, InputType } from "@nestjs/graphql"
import { ObjectId } from "mongoose"


@InputType()
export class AddCommentDto{
    @Field(type => String, {nullable: false})
    readonly username: string

    @Field(type => String, {nullable: false})
    readonly text: string

    @Field(type => String, {nullable: false})
    readonly trackId: string
}