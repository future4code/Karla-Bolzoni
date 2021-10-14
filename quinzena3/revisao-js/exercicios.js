// EXERCÍCIO 01
function inverteArray(array) {
  const novoArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    novoArray.push(array[i])
  }

  return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numeros = []
  for (let numero of array) {
    if (numero % 2 === 0) {
      numeros.push(numero * numero)
    }
  }

  return numeros
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numeros = []
  for (const numero of array) {
    if (numero % 2 === 0) {
      numeros.push(numero)
    }
  }

  return numeros
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = -Infinity
  for (let numero of array) {
    if (numero > maiorNumero) {
      maiorNumero = numero
    }
  }

  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2;
  const booleano4 = !booleano3;

  const resposta = []

  resposta.push(booleano1 && booleano2 && !booleano4)
  resposta.push((booleano1 && booleano2) || !booleano3)
  resposta.push((booleano2 || booleano3) && (booleano4 || booleano1))
  resposta.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))
  resposta.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))

  return resposta
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  for (let i = 0; numerosPares.length < n; i++) {
    if (i % 2 == 0) {
      numerosPares.push(i);
    }
  }

  return numerosPares;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && a === c) {
    return 'Equilátero'
  } else if (a !== b && a !== c) {
    return 'Escaleno'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero = 0
  let menorNumero = 0
  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  const diferenca = maiorNumero - menorNumero

  let informacaoNumero = {
    maiorNumero,
    maiorDivisivelPorMenor,
    diferenca
  }
  return informacaoNumero
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let maiorNumero = 0
  let segundoMaiorNumero = 0
  let segundoMenorNumero = Infinity
  let menorNumero = Infinity

  for (let numero of array) {
    if (numero > maiorNumero) {
      maiorNumero = numero
    }
    if (numero < menorNumero) {
      menorNumero = numero
    }
  }
  for (let numero of array) {
    if (numero > segundoMaiorNumero && numero < maiorNumero) {
      segundoMaiorNumero = numero
    }
    if (numero < segundoMenorNumero && numero > menorNumero) {
      segundoMenorNumero = numero
    }
  }

  return [segundoMaiorNumero, segundoMenorNumero]
}
// EXERCÍCIO 11
function ordenaArray(array) {

  let length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < (length - i - 1); j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }

    }
  }

  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  let filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return filmeFavorito
}

// EXERCÍCIO 13
function imprimeChamada() {
  let filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  let frase = `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[2]}, ${filmeFavorito.atores[3]}.`

  return frase
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  objetoRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * (lado1 + lado2)),
    area: (lado1 * lado2)
  }

  return objetoRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  pessoa.nome = "ANÔNIMO"

  return pessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const filtraAdulto = (item) => {
    if (item.idade >= 18) {
      return true
    }
  }

  return arrayDePessoas.filter(filtraAdulto)
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const filtraAdolescente = (item) => {
    if (item.idade < 18) {
      return true
    }
  }

  return arrayDePessoas.filter(filtraAdolescente)
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const transformaArray = (item) => {
    return item * 2
  }

  return array.map(transformaArray)
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const transformaArrayString = (item) => {
    const multiplica = item * 2
    return multiplica.toString()
  }

  return array.map(transformaArrayString)
}

// EXERCÍCIO 17C
function verificaParidade(array) {

  const verificaNumero = (item) => {
    if (item % 2 === 0) {
      return `${item} é par`
    } else {
      return `${item} é ímpar`
    }
  }

  return array.map(verificaNumero)
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const verificaPessoas = (item) => {
    if (item.altura >= 1.5 && item.idade > 14 && item.idade <= 60) {
      return true
    }
  }

  return pessoas.filter(verificaPessoas)
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const verificaPessoas = (item) => {
    if (!(item.altura >= 1.5 && item.idade > 14 && item.idade <= 60)) {
      return true
    }
  }

  return pessoas.filter(verificaPessoas)
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

  function ordenaArray(a, b) {
    if (a.nome < b.nome) {
      return -1
    }
    if (a.nome > b.nome) {
      return 1
    }
    return 0
  }

  return consultasNome.sort(ordenaArray)
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

  const ordenaArrayPorData = (a, b) => {

    const dataSeparadaA = a.dataDaConsulta.split('/')
    const dataSeparadaB = b.dataDaConsulta.split('/')

    a = new Date(dataSeparadaA[2], dataSeparadaA[1], dataSeparadaA[0])
    b = new Date(dataSeparadaB[2], dataSeparadaB[1], dataSeparadaB[0])

    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  }

  return consultasData.sort(ordenaArrayPorData)
}

// EXERCÍCIO 20
function calculaSaldo(contas) {

  const somaCompras = (item) => {
    let soma = 0
    const listaValorCompra = item.compras
    for (let i = 0; i < listaValorCompra.length; i++) {
      soma += listaValorCompra[i]
    }

    item.saldoTotal -= soma

    return item
  }
  return contas.map(somaCompras)
}
