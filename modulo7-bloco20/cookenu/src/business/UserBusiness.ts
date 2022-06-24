import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  User,
  LoginInputDTO,
} from "../model/user";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator()
const tokenGenerator = new TokenGenerator()
const userDatabase = new UserDatabase();

export class UserBusiness {
  
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }
      if (password.length < 6) {
        throw new InvalidPassword();
      }

      const id: string = idGenerator.generateId()

      const user: User = {
        id,
        name,
        email,
        password,
      };
   
      await userDatabase.insertUser(user);

      const token = tokenGenerator.generateToken(id)

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;
    
      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos"email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound()
      }

      if(password !== user.password){ 
        throw new InvalidPassword()
      }

      const token = tokenGenerator.generateToken(user.id)
     
      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public profileUser = (token: string) => {
    const authenticationData = tokenGenerator.tokenData(token)

    if (!authenticationData.id) {
      throw new Unauthorized()
    }

    return userDatabase.getUser(authenticationData.id)
  }

  public getAnotherUserProfile = (id: string, token: string) => {
    const authenticationData = tokenGenerator.tokenData(token)

    if (!authenticationData.id) {
      throw new Unauthorized()
    }
    return userDatabase.getUser(id)
  }
}
