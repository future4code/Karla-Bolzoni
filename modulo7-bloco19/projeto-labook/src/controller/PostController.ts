import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/Post";

export class PostController {

  public createPost = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { photo, description, type, createdAt, authorId } = req.body

      const input: PostInputDTO = {
        photo,
        description,
        type,
        createdAt,
        authorId
      }

      const postBusiness = new PostBusiness()
      await postBusiness.createPost(input)
      
      res.status(201).send({message: "Post criado com sucesso!"})
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}