import { PostDatabase } from "../data/PostDatabase";
import { post, PostInputDTO } from "../model/Post";
import { generateId } from "../services/generateId";

export class PostBusiness {
  public createPost = async (input: PostInputDTO) => {
    const { photo, description, type, createdAt, authorId } = input


  const id: string = generateId()

  const postDatabase = new PostDatabase()
  const post: post = {
    id,
    photo,
    description,
    type,
    createdAt,
    authorId
  }
  await postDatabase.insertPost(post)
  }
}