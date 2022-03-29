//a
 //const minhaString: string = 5

 //Erro, tipo number não pode ser atribuído à uma string

 //b

 const meuNumero: number | string = 5 

 //c

 const myObj: { nome: string, idade: number, corFavorita: string } = {
   nome: "Nome",
   idade: 8,
   corFavorita: "rosa"
 } 

enum Cores {
  AMARELO = "amarelo",
  AZUL = "azul",
  ANIL = "anil",
  VIOLETA = "violeta",
  VERMELHO = "vermelho",
  VERDE = "verde",
  LARANJA = "laranja"
}

type pessoa = {
  nome: string,
  idade: number,
  corFavorita: Cores
}


const aluna1: pessoa = {
  nome: 'lais',
  idade: 27,
  corFavorita: Cores.VIOLETA
}

const aluna2: pessoa = {
  nome: 'karla',
  idade: 28,
  corFavorita: Cores.AZUL
}

const aluna3: pessoa = {
  nome: 'dani',
  idade: 19,
  corFavorita: Cores.VERDE
}

//2
//a


function obterEstatisticas(numeros : number[]) : { 
  maior: number, 
  menor: number, 
  media: number
}{
  const numerosOrdenados = numeros.sort(
      (a, b) => a - b
  )

  let soma = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}
//b
//numerosOrdenados: number[]
//soma: number
// estatisticas: number{}

//c
type AmostraDeIdades = {
  numeros: number[],
  obterEstatisticas: () => (numeros: number[]) => {}
}

