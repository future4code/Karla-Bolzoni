import { invalidBeFriendsAgain, invalidMakeFriendship } from "../error/customError";
import { FriendInputDTO, Friends } from "../model/friends";
import { FriendRepository } from "./FriendRepository";

export class FriendBusiness {
  constructor(private friendDataBase: FriendRepository) { }

  async beFriendBusiness(input: FriendInputDTO) {
    try {
      if (!input.makeFriendship) {
        throw new invalidMakeFriendship()
      }

      if (input.user === input.makeFriendship) {
        throw new invalidBeFriendsAgain()
      }
      const friendDataBase = new Friends(input.user, input.makeFriendship)
      const friend = await this.friendDataBase.selectAllFriends(friendDataBase)

      if (friend) {
        throw new invalidBeFriendsAgain()
      }
      const newFriend: FriendInputDTO = {
        ...input,
      }

      await this.friendDataBase.beFriend(newFriend)
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}