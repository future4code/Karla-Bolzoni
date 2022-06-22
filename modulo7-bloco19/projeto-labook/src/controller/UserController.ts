import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/User";

export class UserController {

  public createUser = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { email, name, password } = req.body

      const input: UserInputDTO = {
        name,
        email,
        password
      }

      const userBusiness = new UserBusiness()
      await userBusiness.createUser(input)

      res.status(201).send({ message: "Usuário cadastrado com sucesso!"})
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}