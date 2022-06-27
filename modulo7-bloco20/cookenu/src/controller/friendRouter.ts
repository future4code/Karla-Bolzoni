import express from "express"
import { FriendBusiness } from "../business/FriendBusiness"
import { FriendDatabase } from "../data/FriendDatabase"
import { FriendController } from "./FriendController"


export const friendRouter = express.Router()

const friendDataBase = new FriendDatabase()
const friendBusiness = new FriendBusiness(friendDataBase)
const friendController = new FriendController(friendBusiness)

friendRouter.post("/", friendController.beFriendController)