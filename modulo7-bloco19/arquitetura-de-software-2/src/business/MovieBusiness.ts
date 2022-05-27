import { MovieDataBase } from "../data/MovieDataBase";
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
  async create({
    title,
    description,
    durationInMinutes,
    yearOfRelease
  }: any): Promise<void> {
    if (!title || !description || !durationInMinutes || !yearOfRelease) {
      throw new Error("Dados inválidos (title, description, durationInMinutes, yearOfRelease)")
    }

    const id = generateId()

    const movieDatabase = new MovieDataBase()
    await movieDatabase.create({
      id,
      title,
      description,
      durationInMinutes,
      yearOfRelease
    })
  }
}