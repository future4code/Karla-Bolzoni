//Exercício 1 
function information(nome: string, data: string): string {
  const dataArray: string[] = data.split('/')

  return `Olá me chamo ${nome}, nasci no dia ${dataArray[0]} do mês ${dataArray[1]} do ano de ${dataArray[2]}`
}

//console.log(information('lais', '01/03/1994'));

//exercício 2
function typeVar(paramater: any): string {
  return typeof paramater
}

//console.log(typeVar(true));

//Exercício 3
//nome do filme - ano lançamento - genero filme - poontuação 

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror"
}

type Movie = {
  name: string,
  release: number,
  genre: GENERO,
  score?: number
}

function organizedMovie(name: string, release: number, genre: GENERO, score?: number): Movie {
  const movie: Movie = { name, release, genre, score }

  return movie
}

//console.log(organizedMovie("Homem Aranha", 2022, GENERO.ACAO));

//Exercício 4

type Colaborador = {
  nome: string,
  salario: number,
  setor: Setores,
  presencial: boolean
}
enum Setores {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financerio"
}
const colaboradoresLista: Colaborador[] = [
  { nome: "Marcos", salario: 2500, setor: Setores.MARKETING, presencial: true },
  { nome: "Maria", salario: 1500, setor: Setores.VENDAS, presencial: false },
  { nome: "Salete", salario: 2200, setor: Setores.FINANCEIRO, presencial: true },
  { nome: "João", salario: 2800, setor: Setores.MARKETING, presencial: false },
  { nome: "Josué", salario: 5500, setor: Setores.FINANCEIRO, presencial: true },
  { nome: "Natalia", salario: 4700, setor: Setores.VENDAS, presencial: true },
  { nome: "Paola", salario: 3500, setor: Setores.MARKETING, presencial: true }
]

function filtraColaborador(colaboradores: Colaborador[]): Colaborador[] {
  return colaboradores.filter((colaborador: Colaborador) => {
    return colaborador.setor === Setores.MARKETING && colaborador.presencial
  })

}
//console.log(filtraColaborador(colaboradoresLista));

//Exercício 5
enum Role {
  ADMIN = "Admin",
  USER = "User"
}

type User = {
  name: string,
  email: string,
  role: Role
}

const Users: User[] =
  [
    { name: "Rogério", email: "roger@email.com", role: Role.USER },
    { name: "Ademir", email: "ademir@email.com", role: Role.ADMIN },
    { name: "Aline", email: "aline@email.com", role: Role.USER },
    { name: "Jéssica", email: "jessica@email.com", role: Role.USER },
    { name: "Adilson", email: "adilson@email.com", role: Role.USER },
    { name: "Carina", email: "carina@email.com", role: Role.ADMIN }
  ]

function filterAdmin(users: User[]): string[] {
  return users
    .filter((user) => user.role === Role.ADMIN)
    .map((user) => user.email)
}

//console.log(filterAdmin(Users));

//Exercício 6

type Customer = {
  cliente: string,
  saldoTotal: number,
  debitos: number[]
}

const Customers: Customer[] =
  [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    //{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
  ]

function filterCustomer(customers: Customer[]): Customer[] {
  const debitCustomer: Customer[] = []

  customers.forEach((customer: Customer) => {
    let debits: number = 0
    if (customer.debitos.length) {
      debits = customer.debitos
        .reduce((n1: number, n2: number) => n1 + n2)
    }

    const residual: number = customer.saldoTotal - debits
    if (residual < 0) {
      debitCustomer.push({
        cliente: customer.cliente,
        saldoTotal: residual,
        debitos: []
      })
    }
  })
  return debitCustomer
}
console.log(filterCustomer(Customers));

//Exercício 7
type ProdutoEstoque = {
  nome: string,
  quantidade: number,
  valorUnitario: number | string
}

const Produtos: ProdutoEstoque[] =
  [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
  ]

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace('.', ',')
  return "R$ " + valorAjustado
}

function consultaEstoque(produtos: ProdutoEstoque[]): ProdutoEstoque[] {

  const precoAjustado = produtos
    .map((produto) => {
      produto.valorUnitario = ajustaPreco(produto.valorUnitario as number)

      return produto
    })
    .sort((a, b) => a.quantidade - b.quantidade)

  return precoAjustado

}

console.log(consultaEstoque(Produtos));

//Exercício 8
function converteData(data: string): number {
  const dataAtual = (new Date()).getTime()
  const dataArray = data.split('/')
  const dataRecebidaConvertida = `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`
  const dataFormat = (new Date(dataRecebidaConvertida)).getTime()

  const diferencaData = (dataAtual - dataFormat) / (1000 * 3600 * 24 * 365)

  return diferencaData
}

function checaRenovacaoRg(dataNascimento: string, emissaoRG: string): boolean {
  const idade = converteData(dataNascimento)
  const tempoCarteira = converteData(emissaoRG)

  if (idade <= 20) {
    return tempoCarteira >= 5 ? true : false
  } else if (idade >= 20 || idade <= 50) {
    return tempoCarteira >= 10 ? true : false
  } else if (idade > 50) {
    return tempoCarteira >= 15 ? true : false
  }
}

console.log('CHECA RENOVAÇÃO RG:', checaRenovacaoRg('07/12/1930', '01/10/2020'));

// EXER 9

function calculateFactorial(n: number): number {
  let factorial = 1
  for (let i = n; i > 1; i--) {
    factorial *= i
  }
  
  return factorial
}

function wordToFactorial(word: string): number {
  const length = word.length
  return calculateFactorial(length)
}

console.log(wordToFactorial("word"));

function calculateTenthDigit(partialNumber: string): number {
  let result = 0
  let multiplier = 10
  for (let i = 0; i <= 8 ; i++) {
    result += Number(partialNumber.charAt(i)) * multiplier
    multiplier--
  }
  const mod = result % 11
  const tenthDigit = 11 - mod
  
  return tenthDigit >= 10 ? 0 : tenthDigit
}

function calculateEleventhDigit(partialNumber: string): number {
  let result = 0
  let multiplier = 11
  for (let i = 0; i <= 9 ; i++) {
    result += Number(partialNumber.charAt(i)) * multiplier
    multiplier--
  }
  const mod = result % 11
  const tenthDigit = 11 - mod
  
  return tenthDigit >= 10 ? 0 : tenthDigit
}

function validateCPF(cpf: string): boolean {
  const splitedNumber = cpf.split('.')
  const separateLastNumbers = splitedNumber[2].split('-')
  const baseNumbers = `${splitedNumber[0]}${splitedNumber[1]}${separateLastNumbers[0]}`
  const dv = separateLastNumbers[1]

  const tenth = calculateTenthDigit(baseNumbers)
  const eleventh = calculateEleventhDigit(baseNumbers+tenth)

  const validCPF = `${baseNumbers}${tenth}${eleventh}`
  cpf = `${baseNumbers}${dv}`
  return validCPF === cpf
}

console.log(validateCPF('027.575.510-00'));
console.log(validateCPF('849.474.110-15'));
console.log(validateCPF('027.575.510-10'));
console.log(validateCPF('849.474.110-25'));
