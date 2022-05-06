import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getBuiesUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId

    const result = await selectPurchase(userId)

    res.status(200).send(result)

  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.message || error.sqlMessage)
  }
}


export default async function selectPurchase(id: string): Promise<any> {

  const result = await connection.raw(`
  SELECT * FROM labecommerce_purchases p WHERE p.user_id = "${id}"; `
  )

  return result[0]
}