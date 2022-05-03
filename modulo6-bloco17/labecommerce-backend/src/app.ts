import express from "express"
import cors from 'cors'
import { createUser } from './endpoints/createUser'
import { getUsers } from "./endpoints/getUsers"
import { insertProduct } from "./endpoints/insertProduct"
import { getProductsAll } from "./endpoints/getProductsAll"
import { getProduct } from "./endpoints/getProduct"
import { registerBuy } from "./endpoints/registerBuy"
import { getBuiesUser } from "./endpoints/getBuiesUser"

export default () => {
  const app = express()

  app.use(express.json())
  app.use(cors())
  app.get('/users/:userId/purhcases', getBuiesUser)
  app.get('/users', getUsers)
  app.post('/users', createUser)
  app.post('/products', insertProduct)
  app.get('/products', getProductsAll )
  app.get('/product/:id', getProduct)
  app.post('/purchases', registerBuy)

  return app
}