import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/Movie";

export class MovieController {
  public createMovie = async (
    req: Request, 
    res: Response
    ) => {
    try {
      const { title,description, durationInMinutes, yearOfRelease } = req.body

      const input: MovieInputDTO = {
        title,
        description, 
        durationInMinutes, 
        yearOfRelease
      }

      const movieBusiness = new MovieBusiness()
      await movieBusiness.createMovie(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });

    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}