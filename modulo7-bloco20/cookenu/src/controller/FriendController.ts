import { FriendBusiness } from "../business/FriendBusiness";
import { FriendInputDTO } from "../model/friends";
import { Request, Response } from "express";
export class FriendController {
  constructor(private friendBusiness: FriendBusiness) {}

  async beFriendController(req: Request, res: Response) {
    try {
      const { user, makeFriendship } = req.body

      const friend: FriendInputDTO = {
        user,
        makeFriendship
      }

      await this.friendBusiness.beFriendBusiness(friend)

      res.status(201).send({
        message: "Friendship accepted successfully!",
      });
    } catch (error: any) {
      res.status(400).send({
        message: error.message
      })
    }
  }
}