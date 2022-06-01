import { MovieDataBase } from "../data/MovieDataBase";
import { movie, MovieInputDTO } from "../model/Movie";
import { generateId } from "../services/generateId";

export class MovieBusiness {
  public createMovie = async (input: MovieInputDTO) => {
    try {

      const { title, description, durationInMinutes, yearOfRelease } = input

      if (!title || !description || !durationInMinutes || !yearOfRelease) {
        throw new Error("Dados inválidos (title, description, durationInMinutes, yearOfRelease)")
      }

      const id: string = generateId()

      const movieDatabase = new MovieDataBase()

      const movie: movie = {
        id,
        title,
        description,
        durationInMinutes,
        yearOfRelease
      }
      await movieDatabase.insertMovie(movie)
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}