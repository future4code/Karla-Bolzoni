import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import {UserInputDTO}  from "../model/User";

export class UserController {

  public createUser = async (
    req: Request, 
    res: Response
    ) => {
    try {
      const { email, name, password } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const userBusiness = new UserBusiness();
      const result = await userBusiness.getAll()
      
      res.status(201).send(result)
    } catch (error) {
      res.status(400).send(error.message);
      
    }
  }
}
