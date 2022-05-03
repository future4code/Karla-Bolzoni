import { Request, Response } from "express"
import { connection } from "../data/connection"
import { User } from "../types"
import {v4 as uuidv4} from "uuid"


export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await selectUsers()

    res.status(200).send(result)
    
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.message || error.sqlMessage)
  }
}


export default async function selectUsers(): Promise<any[]> {
  const result = await connection.raw(`
  SELECT * FROM labecommerce_users; `
  )

  return result[0]
}