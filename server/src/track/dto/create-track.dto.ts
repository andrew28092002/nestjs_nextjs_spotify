import { ArgsType, Field, InputType } from "@nestjs/graphql"


@InputType()
export class CreateTrackDto{
    @Field(type => String, {nullable: false})
    readonly name: string

    @Field(type => String, {nullable: false})
    readonly artist: string

    @Field(type => String, {nullable: true})
    readonly text: string
}