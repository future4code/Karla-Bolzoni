import { Request, Response } from "express"
import { connection } from "../data/connection"
import {v4 as uuidv4} from "uuid"


export const getProductsAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await selectProducts()

    res.status(200).send(result)
    
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.message || error.sqlMessage)
  }
}


export default async function selectProducts(): Promise<any[]> {
  const result = await connection.raw(`
  SELECT * FROM labecommerce_products; `
  )

  return result[0]
}