import { ArgsType, Field } from "@nestjs/graphql"


@ArgsType()
export class CreateTrackDto{
    @Field(type => String, {nullable: false})
    readonly name: string

    @Field(type => String, {nullable: false})
    readonly artist: string

    @Field(type => String, {nullable: false})
    readonly text: string
}