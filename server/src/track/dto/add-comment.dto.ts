import { ArgsType, Field } from "@nestjs/graphql"
import { ObjectId } from "mongoose"


@ArgsType()
export class AddCommentDto{
    @Field(type => String, {nullable: false})
    readonly username: string

    @Field(type => String, {nullable: false})
    readonly text: string

    @Field(type => String, {nullable: false})
    readonly trackId: string
}