import express, { Request, Response } from "express";
import { Customer, customerList, Transaction, transactionType } from './data'

import { AddressInfo } from "net";
import moment from "moment";

const app = express();

app.use(express.json());

function verificaIdade(data: string): number {
  const currenteData = (new Date()).getTime()
  const dataArray = data.split('/')
  const defaulDataTransform = `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`
  const dataFormat = (new Date(defaulDataTransform)).getTime()

  const diferenceData = (currenteData - dataFormat) / (1000 * 3600 * 24 * 365)

  return diferenceData
}

type CustomError = { [chave: string]: { status: number, message: string } }

const Errors: CustomError = {
  AGE_PARAMETER:
  {
    status: 400,
    message: "É NECESSÁRIO TER 18 ANOS"
  },
  MISSING_PARAMETER:
  {
    status: 400,
    message: "Faltou preencher o campo nome ou cpf"
  },
  CUSTOMER_NOT_FOUND:
  {
    status: 400,
    message: "Cliente não encontrado!"
  },
  INVALID_DATE:
  {
    status: 400,
    message: "Data de pagamento não pode ser anterior ao dia de hoje"
  },
  NOT_ENOUGH_BALANCE: {
    status: 400,
    message: "Saldo insuficiente"
  },
}

app.post("/customers/:cpf/pagar", (req: Request, res: Response) => {
  try {
    const body: {
      value: number,
      description: string,
      date: string
    } = req.body
    const cpf: string = req.params.cpf

    if (!body || !cpf) {
      throw new Error(Errors.MISSING_PARAMETER.message)
    }
    console.log(moment.now());
    
    let date: moment.Moment
    if (!body.date) {
      date = moment()
    } else {
      const splitDate: string[] = (body.date as string).split("/")
      date = moment(splitDate[2]+'/'+splitDate[1]+'/'+splitDate[0])
    }
    const isInvalidDate = moment(date).isSameOrBefore(moment())
    if (isInvalidDate) {
      throw new Error(Errors.INVALID_DATE.message)
    }

    const customerIndex = customerList.findIndex((customer: Customer) => customer.cpf === cpf)
    if (customerIndex < 0) {
      throw new Error(Errors.CUSTOMER_NOT_FOUND.message)
    }
    const customer: Customer = customerList[customerIndex]
    if (customer.balance < body.value) {
      throw new Error(Errors.NOT_ENOUGH_BALANCE.message)
    }

    const transaction: Transaction = {
      date: date.toISOString(),
      transaction: transactionType.PAYMENT,
      value: body.value
    }

    customerList[customerIndex].transactions.push(transaction)
    customerList[customerIndex].balance -= transaction.value

    res.status(201).send()
  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETER.message:
        res.status(Errors.MISSING_PARAMETER.status)
          .send(Errors.MISSING_PARAMETER.message)
        break;
      case Errors.CUSTOMER_NOT_FOUND.message:
        res.status(Errors.CUSTOMER_NOT_FOUND.status)
          .send(Errors.CUSTOMER_NOT_FOUND.message)
      case Errors.NOT_ENOUGH_BALANCE.message:
        res.status(Errors.NOT_ENOUGH_BALANCE.status)
          .send(Errors.NOT_ENOUGH_BALANCE.message)
        break;
      case Errors.INVALID_DATE.message:
        res.status(Errors.INVALID_DATE.status)
          .send(Errors.INVALID_DATE.message)
        break;
    }
  }
})

app.put("/customers/saldo", (req: Request, res: Response) => {
  try {
    const body: { name: string, cpf: string, amount: number } = req.body

    if (!body.name || !body.cpf || !body.amount) {
      throw new Error(Errors.MISSING_PARAMETER.message)
    }
    const customer = customerList.find((customer: Customer) => customer.cpf === body.cpf)
    if (!customer) {
      throw new Error(Errors.CUSTOMER_NOT_FOUND.message)
    }

    customer.balance += body.amount

    res.status(201).send()
  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETER.message:
        res.status(Errors.MISSING_PARAMETER.status)
          .send(Errors.MISSING_PARAMETER.message)
        break;
      case Errors.CUSTOMER_NOT_FOUND.message:
        res.status(Errors.CUSTOMER_NOT_FOUND.status)
          .send(Errors.CUSTOMER_NOT_FOUND.message)
        break;
    }
  }
})

app.get("/customers/saldo", (req: Request, res: Response) => {
  try {
    const cpf = req.query.cpf as string
    const name = req.query.name as string

    if (!cpf || !name) {
      throw new Error(Errors.MISSING_PARAMETER.message)
    }
    const customer = customerList.find((customer: Customer) => customer.cpf === cpf)
    if (!customer) {
      throw new Error(Errors.CUSTOMER_NOT_FOUND.message)
    }
    res.send(customer.balance.toString())
  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETER.message:
        res.status(Errors.MISSING_PARAMETER.status)
          .send(Errors.MISSING_PARAMETER.message)
        break;
      case Errors.CUSTOMER_NOT_FOUND.message:
        res.status(Errors.CUSTOMER_NOT_FOUND.status)
          .send(Errors.CUSTOMER_NOT_FOUND.message)
        break;
    }
  }
})

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

app.get('/customers', (req: Request, res: Response) => {
  res.send(customerList)
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})