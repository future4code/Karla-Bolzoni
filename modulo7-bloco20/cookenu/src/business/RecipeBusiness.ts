import { RecipeDataBase } from "../data/RecipeDatabase"
import { CustomError, Unauthorized } from "../error/customError"
import { Recipe, RecipeInputDTO } from "../model/recipe"
import { IdGenerator } from "../services/IdGenerator"
import { TokenGenerator } from "../services/TokenGenerator"

const recipeDatabase = new RecipeDataBase()
const tokenGenerator = new TokenGenerator()
const idGenerator = new IdGenerator()

export class RecipeBusiness {
 
  public createRecipe = async (input: RecipeInputDTO,token:string) => {
    
    const authenticationData = tokenGenerator.tokenData(token)

    const { title, description } = input

    if(!title || !description) {
      throw new CustomError(400, 'Preencha os campos título e descrição.')
    }

    const id: string = idGenerator.generateId()

    const recipe: Recipe = {
      id,
      title,
      description
    }

    await recipeDatabase.insertRecipe(recipe, authenticationData.id)
  }

  public getRecipe = (id: string, token: string,) => {
    const authenticationData = tokenGenerator.tokenData(token)
    
    if (!authenticationData.id) {
      throw new Unauthorized()
    }

    return recipeDatabase.getRecipe(id)
  }
}