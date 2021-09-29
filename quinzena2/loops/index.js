/* 
=================================================
Exercícios sobre interpretação de código:
=================================================
1- O que o código abaixo está fazendo? Qual o resultado impresso no console?
O código abaixo esta somando 1 ao valor enquanto o i for menor que 5


let valor = 0
for(let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)
IMPRIME: 10

2-
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a)IMPRIME: 19, 21, 23, 25, 27, 30
b) Não é possível acessar o índice apenas com FOR...OF... Pode ser utilizado um contador auxiliar i++

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

let contador = 0

for (let numero of lista) {
    
    console.log(contador, numero) ;
    contador++
}
*/

//EXERCÍCIO 1:


const bichinhoEstimacao = () => {

    let quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
    let nomesBichinhos = []
    if (quantidadeBichinhos === 0) {
        console.log("Que Que pena! Você pode adotar um pet!")
    } else {

        for (let i = 0; i < quantidadeBichinhos; i++) {
            let guardaNome = prompt("Digite o nome do bichinho")
            nomesBichinhos.push(guardaNome)

        }
    } console.log(nomesBichinhos)
}
//bichinhoEstimacao()


//EXERCÍCIO 2:
//a)imprime cada um dos valores do array original.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

const imprimeVAlor = (valor) => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(valor[i])
    }
}
//imprimeVAlor(arrayOriginal)

//b)imprime cada um dos valores do array original divididos por 10

const valorDividido = (valor) => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        let divisao = valor[i] / 10
        console.log(divisao)
    }
}
//valorDividido(arrayOriginal)

//c)crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
const criandoArrayPar = (valor) => {
    let novoArrayPar = []
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (valor[i] % 2 === 0) {
            novoArrayPar.push(valor[i])
        }
        console.log(novoArrayPar)
    }
}
//criandoArrayPar(arrayOriginal)

//d)crie um novo array contendo strings, da seguinte 
//forma: "O elemento do índex i é: numero". Depois, imprima este novo array.

const imprimeArrayString = (valor) => {
    let arrayDeString = [] 
    for(let i = 0; i < arrayOriginal.length; i++){
        arrayDeString.push(`O elemento do índex ${[i]} é: ${valor[i]}`)  
    } 
    console.log(arrayDeString)         
}
//imprimeArrayString(arrayOriginal)

//e) imprima no console o maior e o menor números contidos no array original

const imprimeNumero = (valor) => {
    let valorMaximo = 0
    let valorMinimo = 0
    
    for(let i = 0; i < arrayOriginal.length; i++){
        if(valor[i] > valorMaximo) {
            valorMaximo = valor[i]
        }else if(valor[i] < valorMinimo !== 0){
            valorMinimo = valor[i]
        }
    } console.log(`o Maior numero é ${valorMaximo} e o menor número é  ${valorMinimo}`)
}
imprimeNumero(arrayOriginal)