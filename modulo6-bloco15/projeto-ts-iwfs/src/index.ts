import express, { Request, Response } from "express";
import { Customer, customerList } from './data'

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get('/customers', (req: Request, res: Response) => {
  res.send(customerList)
})

const Errors: { [chave: string]: { status: number, message: string } } = {
  AGE_PARAMETER:
  {
    status: 400,
    message: "É NECESSÁRIO TER 18 ANOS"
  }
}

//Crie um endpoint  que utilize o método POST da entidade users que  será responsável por cadastrar um usuário em um array de usuários. 
app.post("/customers", (req: Request, res: Response) => {
  try {
    const body: Customer = req.body

    for (let customer of customerList) {
      if (body.cpf === customer.cpf) {
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
    const idade = verificaIdade(newCustomer.birthDate)

    if (idade < 18) {
      throw new Error(Errors.AGE_PARAMETER.message)
    }
    customerList.push(newCustomer)
  } catch (error: any) {
    switch (error.message) {
      case Errors.AGE_PARAMETER.message:
        res.status(Errors.AGE_PARAMETER.status)
        .send(Errors.AGE_PARAMETER.message)
        break;
    }

  }
  res.send('okzão')
})

function verificaIdade(data: string): number {
  const currenteData = (new Date()).getTime()
  const dataArray = data.split('/')
  const defaulDataTransform = `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`
  const dataFormat = (new Date(defaulDataTransform)).getTime()

  const diferenceData = (currenteData - dataFormat) / (1000 * 3600 * 24 * 365)

  return diferenceData
}





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;