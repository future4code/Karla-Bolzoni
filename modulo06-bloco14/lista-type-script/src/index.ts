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
console.log(filtraColaborador(colaboradoresLista));

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

console.log(filterAdmin(Users));
