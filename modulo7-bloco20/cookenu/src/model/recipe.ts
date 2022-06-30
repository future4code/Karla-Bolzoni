export type Recipe = {
  id: string,
  title: string,
  description: string
}

export interface RecipeInputDTO {
  title: string,
  description: string
}