import { Request, Response } from "express"
import { connection } from "../data/connection"
import { Product, Purchase } from "../types"
import { v4 as uuidv4 } from "uuid"
import selectProduct from "./getProduct"

export const registerBuy = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, productId, quantity } = req.body

    const product: Product = await selectProduct(productId)
    
    const calculaPreco = Number(quantity) * product.price

    const bodyPurchase: Purchase = {
      id: uuidv4(),
      userId,
      productId,
      quantity,
      totalPrice: calculaPreco
    }

    await postPurchase(bodyPurchase)

    res.send(201)
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.message || error.sqlMessage)
  }
}

export default async function postPurchase(purchase: Purchase): Promise<any[]> {
  const result = await connection.raw(`
  INSERT INTO labecommerce_purchases VALUES 
  ('${purchase.id}','${purchase.userId}','${purchase.productId}','${purchase.quantity}', '${purchase.totalPrice}');`
  )

  return result[0]
}
