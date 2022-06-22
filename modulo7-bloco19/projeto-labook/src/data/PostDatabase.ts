import { post } from '../model/Post';
import { BaseDatabase } from './BaseDatabase';

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_posts"

  public insertPost = async (
    post: post
  ) => {
    await PostDatabase.connection(PostDatabase.TABLE_NAME)
    .insert({
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      created_at: post.createdAt,
      author_id: post.authorId
    })
  }
}