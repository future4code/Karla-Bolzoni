// EXERCÍCIO 01
function inverteArray(array) {
  const novoArray = []
  for (let i= array.length-1; i >=0; i--){

    novoArray.push(array[i])
    console.log(novoArray)
  }
  return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numeros = []
  for (let numero of array) {
    if (numero % 2 === 0){
      numeros.push(numero*numero)
    }
  }
    return numeros;
}


// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numeros = [];
  for (const numero of array) {
    if (numero % 2 === 0) {
      numeros.push(numero);
    }
  }
  return numeros;
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(let numero of array){
    if(numero > maiorNumero){
      maiorNumero = numero
      console.log(maiorNumero)
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

   if (booleano1 && booleano2 && !booleano4){
     resposta.push(booleano1, booleano2, !booleano4);
   }
   console.log(resposta)
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
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
