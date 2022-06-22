import { user } from '../model/User';
import { BaseDatabase } from './BaseDatabase';

export class UserDataBase extends BaseDatabase {
  private static TABLE_NAME = "labook_users"

  public insertUser = async (
    user: user 
  ) => {
    await UserDataBase.connection(UserDataBase.TABLE_NAME)
    .insert({
      id:user.id,
      name: user.name,
      email: user.email,
      password: user.password
    })
  }
}