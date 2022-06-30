import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { Recipe } from "../model/recipe";

export class RecipeDataBase extends BaseDatabase {
  static TABLE_RECIPE = "Recipe_cookenu"

  public insertRecipe = async (recipe: Recipe, id: string) => {
    try {
      await RecipeDataBase.connection(RecipeDataBase.TABLE_RECIPE)
      .insert({
        id:recipe.id,
        title: recipe.title,
        description: recipe.description
      })
      .where({ id })
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  public getRecipe = (id: string) => {
    try {
      return RecipeDataBase.connection(RecipeDataBase.TABLE_RECIPE)
      .select()
      .where({id})
    } catch (error: any) {
      throw new CustomError(404, error.message)
    }
  }
}