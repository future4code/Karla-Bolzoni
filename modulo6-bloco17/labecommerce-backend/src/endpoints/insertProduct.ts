import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Product, User } from "../types"
import {v4 as uuidv4} from "uuid"


export const insertProduct = async (req: Request, res: Response): Promise<void> => {
  try {

    const {  name, price, imageUrl } = req.body
    
    const bodyProduct: Product = {
      id: uuidv4(),
      name,
      price,
      imageUrl
    }
    await postProduct(bodyProduct)
    res.send(201)
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.message || error.sqlMessage)
  }
}


export default async function postProduct( product: Product): Promise<any[]> {
  const image_url = product.imageUrl
  
  const result = await connection.raw(`
  INSERT INTO labecommerce_products VALUES 
  ('${product.id}','${product.name}','${product.price}','${image_url}');`
  )

  return result[0]
}