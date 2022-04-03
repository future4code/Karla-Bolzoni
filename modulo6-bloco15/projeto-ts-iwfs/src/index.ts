import express, { Request, Response } from "express";
import { customerList } from './data'

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get('/customers', (req: Request, res: Response) => {
  // const pegaSaldoPositivo = customerList.filter((customer) => {
  //   return customer.balance > 0
  // })
  res.send(customerList)


})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;