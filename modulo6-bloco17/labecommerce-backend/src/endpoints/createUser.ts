import { Request, Response } from "express"
import { connection } from "../data/connection"
import { User } from "../types"
import {v4 as uuidv4} from "uuid"


export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {

    const {  name, email, password } = req.body
    
    const bodyUser: User = {
      id: uuidv4(),
      name,
      email,
      password
    }
    const result = await insertUser(bodyUser)
    res.send(201)
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.message || error.sqlMessage)
  }
}


export default async function insertUser( user: User): Promise<any[]> {
  const result = await connection.raw(`
  INSERT INTO labecommerce_users VALUES 
  ('${user.id}','${user.name}','${user.email}','${user.password}');`
  )

  return result[0]
}