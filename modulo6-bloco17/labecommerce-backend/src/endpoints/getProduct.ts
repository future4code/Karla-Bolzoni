import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string
    const result = await selectProduct(id)

    res.status(200).send(result)
    
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.message || error.sqlMessage)
  }
}


export default async function selectProduct(id: string): Promise<any> {
  const result = await connection.raw(`
  SELECT * FROM labecommerce_products WHERE id="${id}";`
  )

  return result[0][0]
}