import { Friend, Friends } from "../model/friends";


export interface FriendRepository {
  beFriend(friend: Friend): Promise<void>
  selectAllFriends(friend: Friends) :Promise<Friends>
}