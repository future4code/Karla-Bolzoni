import { FriendRepository } from "../business/FriendRepository";
import { Friend, Friends } from "../model/friends";
import { BaseDatabase } from "./BaseDatabase";


export class FriendDatabase extends BaseDatabase implements FriendRepository {
  private static TABLE_NAME = "User_friends"

  async beFriend(friend: Friend) {
    try {
      await BaseDatabase.connection
        .insert([
          {
            user: friend.makeFriendship,
            user_follow_id: friend.user
          },
          {
            user: friend.user,
            user_follow_id: friend.makeFriendship
          }
        ])
        .into(FriendDatabase.TABLE_NAME)
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  async selectAllFriends(friend: Friends): Promise<Friends> {
    try {
      const [friendUser] = await BaseDatabase.connection
        .select()
        .where({
          user: friend.getUser(),
          make_friendship: friend.getMakeFriendship()
        })
        .into(FriendDatabase.TABLE_NAME)

        return friendUser
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}