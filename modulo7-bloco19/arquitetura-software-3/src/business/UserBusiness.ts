import { UserDatabase } from "../data/UserDatabase"
import { InvalidEmail, InvalidName, InvalidPassword } from "../error/customError"
import { user, UserInputDTO } from "../model/User"
import { generateId } from "../services/generateId"

export class UserBusiness {

  public createUser = async (input: UserInputDTO) => {

    const { name, email, password } = input

    if (!name || !email || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }
    if (password.length < 6) {
      throw new InvalidPassword()
    }
    if(name.length < 3){
      throw new InvalidName()
    }

    if(!email.includes("@")){
      throw new InvalidEmail()
    }
    
    const id: string = generateId()

    const userDatabase = new UserDatabase()
    const user: user = {
      id,
      name,
      email,
      password
    }

    await userDatabase.createUser(user)
  }

  async getAll(): Promise<user[]> {

    const userDatabase = new UserDatabase()

    return userDatabase.getAll()
  }

}

