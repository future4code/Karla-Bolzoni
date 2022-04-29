import express from "express"
import cors from 'cors'
import { createUser } from './endpoints/createUser'

export default () => {
  const app = express()

  app.use(express.json())
  app.use(cors())
  app.post('/users', createUser)

  return app
}