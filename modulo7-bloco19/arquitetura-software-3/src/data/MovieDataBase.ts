import { movie } from "../model/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDataBase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE"

  public insertMovie = async (
    movie: movie
  ) => {
    await MovieDataBase.connection(MovieDataBase.TABLE_NAME)
      .insert({
        id: movie.id,
        title: movie.title,
        description: movie.description,
        duration_in_minutes: movie.durationInMinutes,
        year_of_release: movie.yearOfRelease
      })
  }
}