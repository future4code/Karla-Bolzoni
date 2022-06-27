import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  User,
  LoginInputDTO,
  AuthenticationData,
} from "../model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator()
const tokenGenerator = new TokenGenerator()
const userDatabase = new UserDatabase();
const hashManager = new HashManager();

export class UserBusiness {
  
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password, role } = input;

      if (!name || !email || !password || !role) {
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

      const hashPassword = await hashManager.generateHash(password)
      
      const user: User = {
        id,
        name,
        email,
        password: hashPassword,
        role
      };
   
      await userDatabase.insertUser(user);

      const inputToken: AuthenticationData = {
        id: user.id,
        role: user.role
      }
      const token = tokenGenerator.generateToken(inputToken)
    
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
          'Preencha os campos"email", "password" e "role"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser(email);
      const hashComparison = await hashManager.compareHash(password, user.password)

      if(!hashComparison) {
        throw new InvalidPassword()
      }

      if (!user) {
        throw new UserNotFound()
      }

      const payload: AuthenticationData = {
        id: user.id,
        role: user.role
      }
      const token = tokenGenerator.generateToken(payload)
     
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
