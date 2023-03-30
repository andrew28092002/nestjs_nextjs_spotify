import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddCommentDto } from './dto/add-comment.dto';
import { Comment } from './schemas/comment.schema';
import { Track } from './schemas/track.schema';
import { TrackService } from './track.service';

@Resolver((of) => Track)
export class TrackResolver {
  constructor(private readonly TrackService: TrackService) {}

  @Query((returns) => [Track])
  getAll(
    @Args('count', { type: () => Int, nullable: true }) count?: number,
    @Args('offset', { type: () => Int, nullable: true }) offset?: number,
  ) {
    return this.TrackService.getAll(count, offset);
  }

  @Query((returns) => Track)
  getOne(@Args('id', { type: () => String }) id: string) {
    return this.TrackService.getOne(id);
  }

  @Query((returns) => [Track])
  search(@Args('query', { type: () => String }) query: string) {
    return this.TrackService.search(query);
  }

  @Query((returns) => String)
  delete(@Args('id', { type: () => String }) id: string) {
    return this.TrackService.delete(id);
  }

  @Mutation((returns) => Comment)
  commment(@Args('comment') dto: AddCommentDto) {
    return this.TrackService.addComment(dto);
  }

  @Query((returns) => Track)
  listen(@Args('id', { type: () => String }) id: string) {
    return this.TrackService.listen(id);
  }
}
