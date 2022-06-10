import { UserDataBase } from "../data/UserDatabase";
import { user, UserInputDTO } from "../model/User";
import { generateId } from "../services/generateId";

export class UserBusiness {
  public createUser = async (input: UserInputDTO) => {
    const { name, email, password } = input

    let message = "Success!"

    if (!name || !email || !password) {
      message = '"name", "email" and "password" must be provided'
      throw new Error(message)
    }

    const id: string = generateId()

    const userDatabase = new UserDataBase()
    const user: user = {
      id,
      name,
      email,
      password
    }
    await userDatabase.insertUser(user)
  }
}