import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
  AuthenticationData,
} from "../model/user";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";
import { HashManager } from "../services/HashManager";

const idGenerator = new IdGenerator()
const tokenGenerator = new TokenGenerator()
const userDatabase = new UserDatabase();
const hashManager = new HashManager();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      let { name, nickname, email, password, role } = input;


      if (!name || !nickname || !email || !password || !role) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email", "password" e "role"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      // if (role !== "NORMAL" && role !== "ADMIN"){
      // role = "NORMAL"
      // }

      const id: string = idGenerator.generateId()

      const hashPassword = await hashManager.generateHash(password)

      const user: user = {
        id,
        name,
        nickname,
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
          'Preencha os campos"email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser(email);
      const hashComparison = await hashManager.compareHash(password, user.password)

      if (!hashComparison) {
        throw new InvalidPassword
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
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id, token } = input;

      if (!name || !nickname || !id || !token) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name", "nickname" e "token"'
        );
      }

      const data = tokenGenerator.tokenData(token)

      if (!data.id) {
        throw new Unauthorized()
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserProfile = (token: string) => {
    const authenticationData = tokenGenerator.tokenData(token);        

    if (authenticationData.role.toLowerCase() !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }

    return userDatabase.getUser(authenticationData.id);
  }
}
