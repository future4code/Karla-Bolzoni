import express, { Request, Response } from "express";
import { Customer, customerList } from './data'

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get('/customers', (req: Request, res: Response) => {
  res.send(customerList)
})

//Crie um endpoint  que utilize o método POST da entidade users que  será responsável por cadastrar um usuário em um array de usuários. 
app.post("/customers", (req: Request, res: Response) => {
  const body: Customer = req.body

  for(let customer of customerList){
    if(body.cpf === customer.cpf){
      return res.status(400).send("cpf ja existe")
    } 
  }

  const newCustomer: Customer = {
    name: body.name,
    cpf: body.cpf,
    birthDate: body.birthDate,
    balance: 0,
    transactions: []
  }

  customerList.push(newCustomer)

  res.send('okzão')
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;