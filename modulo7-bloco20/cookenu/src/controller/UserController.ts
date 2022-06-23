import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/user";

const userBusiness = new UserBusiness()

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, email, password } = req.body
       
          const input: UserInputDTO = {
            name,
            email,
            password,
          }

          const token = await userBusiness.createUser(input);
    
          res.status(201).send({ message: "Usuário criado!",input, token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }
      
      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          }

          const token = await userBusiness.login(input);
    
          res.status(200).send({ message: "Usuário logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }
}
