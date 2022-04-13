export enum transactionType {
  WITHDRAW = "Withdraw",
  PAYMENT = "Payment",
  DEPOSIT = "Deposit",
  TRANSFER = "Transer"
  
}
export type Transaction = {
  value: number,
  transaction: transactionType,
  date: string

} 
//1) Crie um tipo para representar uma conta para o usuário

export type Customer = { 
  name: string,
  cpf: string,
  birthDate: string,
  transactions: Transaction[],
  balance: number
}

export const customerList : Customer[] = [
  {
    "name" : "lucas",
    "cpf": "12345678955",
    "birthDate" : "07/12/1990",
    "transactions": [],
    "balance": 10
  },
  {
    "name" : "ana",
    "cpf": "12345458955",
    "birthDate" : "28/10/1993",
    "transactions": [
      {
        "value": 56,
        "date": '01/04/2022',
        "transaction": transactionType.PAYMENT
      }
    ],
    "balance": 0
  },
  {
    "name" : "josé",
    "cpf": "12345878955",
    "birthDate" : "10/10/1993",
    "transactions": [],
    "balance": 20
  }

]