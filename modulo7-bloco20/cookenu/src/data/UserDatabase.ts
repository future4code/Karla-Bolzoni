import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { User } from "../model/user";

export class UserDatabase extends BaseDatabase {
  static TABLE_USER = "Users_cookenu"

  public insertUser = async (user: User) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into(UserDatabase.TABLE_USER);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public findUser = async (email: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_USER)
        .select()
        .where({ email });

      return result[0];

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}
