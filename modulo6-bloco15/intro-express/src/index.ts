import express, { Request, Response } from 'express'
// import cors from 'cors'

import { AddressInfo } from "net";
import { users } from './data';
import { posts } from './data'

const app = express();

app.use(express.json());
// app.use(cors())

//REQUISIÇÃO DE USUÁRIOS
app.get('/users', (req: Request, res: Response) => {
  const usuarios = users.map((user) => user.name)

  res.send(usuarios)
})

//REQUSIÇÃO DE POSTS
app.get("/posts", (req: Request, res: Response) => {
  const publicacoes = posts.map((post) => post.title) 
  res.send(publicacoes)
})

//REQUISIÇÃO DE POST DO USUÁRIO
app.get("/posts/:id", (req: Request, res: Response) => {
  const idUser: any  = req.query.id

  const procuraPost = posts.map((post) => {
    if(post.userId === idUser ){
      post.body
    }
  })
  res.send(procuraPost)
})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
