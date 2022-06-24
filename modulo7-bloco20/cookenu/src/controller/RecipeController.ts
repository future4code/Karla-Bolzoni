import { Request, Response } from "express"
import { RecipeBusiness } from "../business/RecipeBusiness"
import { RecipeInputDTO } from "../model/recipe"

const recipeBusiness = new RecipeBusiness()

export class RecipeController {

  public addRecipe = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string

      const { title, description } = req.body

      const input: RecipeInputDTO = {
        title,
        description
      }

      const recipe = await recipeBusiness.createRecipe(input, token)

      res.status(201).send({ message: "receita criada com sucesso!", recipe })
    } catch (error: any) {
      res.status(400).send(error.message);

    }
  }

  public getRecipe = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string
      const {id} = req.params

      const recipe = await recipeBusiness.getRecipe(id, token)

      res.status(200).send(recipe)
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      })
    }
  }
}


