//Questão A:
//Um construtor serve para definnir quais atributos serão necessários ser preenchidos
//no momento de instânciar a classe. 
//Ele serve para que a gente não precise acessar diretamente uma propriedade

//Questão B: Chamada uma vez apenas

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    cpf: string,
    name: string,
    age: number,
  ) {
    //console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCpf(): string {
    return this.cpf
  };
  public getName = () => this.name;
  public getAge = () => this.age;
  public addTransaction = (transaction: Transaction) => {
    this.transactions.push(transaction)
  }
}

const userA = new UserAccount('84947411015', 'natany', 28)
//console.log(userA)


//Questão C
//Temos acesso através de métods getters e setters que devem ser declarados como public


class Transaction {
  private description: string
  private value: number
  private date: string

  constructor(description: string, value: number, date: string) {
    this.description = description
    this.value = value
    this.date = date
  }

  public getDescription = () => this.description;
  public getValue = () => this.value;
  public getDate = () => this.date;

}

const transactionA: Transaction = new Transaction('Saldo:', 55, '10/05/2022')
// console.log(transactionA);

class Bank {
  private accounts: UserAccount[]

  constructor(accounts: UserAccount[] = []) {
    this.accounts = accounts
  }

  public getAccounts = () => this.accounts;
  public setAcount = (account: UserAccount) => {
    this.accounts.push(account)
  }
}

userA.addTransaction(transactionA)
console.log('com saldo', userA);

const bankA = new Bank()

bankA.setAcount(userA)

bankA.getAccounts()

// console.log(bankA.getAccounts());


