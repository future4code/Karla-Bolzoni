/*EXERCÍCIO 1. ESCREVENDO O QUE SERÁ IMPRESSO NO CONSOLE:

const bool1 = true
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2
console.log("a. ", resultado)
IMPRIME: a. false
 
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
IMPRIME: b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
IMPRIME: c. true

console.log("d. ", typeof resultado)
IMPRIME: d. boolean

---------------------------------------
EXERCÍCIO 2. 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero
 
console.log(soma)
IMPRIME: Vai imprimir no console os dois números que foram informados no prompt, ao invés da soma deles.
Isto acotnece, pois faltou fazer a conversão de string para number no prompt.

EXERCÍCIO 3.
SUGERINDO SOLUÇÃO PARA OS NÚMEROS SEREM SOMADOS:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
--------------------------------------------
EXERCICIO DE ESCRITO DE CÓDIGO*/

//EXERCÍCIO 1:

let anoAtual= Number(prompt("Olá, em qual ano estamos?"))
let anoNascimentoUsuario = Number(prompt("Em qual ano você nasceu?"))
let anoNascimentoAmigo = Number(prompt("Qual o ano de nascimento da pessoa que você considera como melhor amigue?"))
let idadeAtualUsuario = anoAtual - anoNascimentoUsuario 
let idadeAtualAmigo = anoAtual - anoNascimentoAmigo
let diferencaIdade = idadeAtualUsuario - idadeAtualAmigo

let idadeEhMaior = idadeAtualUsuario > idadeAtualAmigo

console.log("Sua idade é maior do que a do seu amigo?", idadeEhMaior) 

//EXERCICIO 2
//insira um nº par
let numeroPar = Number(prompt("Insira um nº par."))
let resto = numeroPar % 2

console.log(resto)
//Sempre retorna 0 (zero), pois a divisão é exata, então não sobra nada.
// Caso seja inserido um nº ímpar, ira retornar o valor que resta da divisão.

//EXERCÍCIO 3
//perguntando ao usuário sua idade em anos

let anoAtual2 = Number(prompt("Em qual ano estamos?"))
let anoNascimento = Number(prompt("Em qual ano você nasceu?"))
let idadeAtual = anoAtual2- anoNascimento

console.log("A idade do usuário em anos é:",idadeAtual, "anos")

//a) idade do usuário em meses:
let idadeMeses = idadeAtual * 12
console.log("A idade do usuário em meses é:",idadeMeses, "meses")

//b) idade do usuário em dias:
let idadeDias = idadeAtual * 365
console.log("A idade do usuário em dias é:",idadeDias, "dias")

//c) idade do usuario em horas
let idadeHoras = idadeDias * 24
console.log("A idade do usuário em horas é:", idadeHoras, "horas")

//EXERCÍCIO 4 Peça dados ao usuário e imprima no console:

let primeiroNumero = Number(prompt("Insira um numero"))
let segundoNumero = Number(prompt("Insira outro numero"))

let numeroEhMaior = primeiroNumero > segundoNumero
console.log("O primeiro número é maior que o segundo?", numeroEhMaior)

let numeroEhIgual = primeiroNumero === segundoNumero
console.log("O primeiro número é igual ao segundo?", numeroEhIgual)

let primeiroNumeroDivisivel = primeiroNumero % segundoNumero === 0
console.log("O primeiro numero é divisivel pelo segundo?", primeiroNumeroDivisivel)

let segundoNumeroEhDivisivel = segundoNumero % primeiroNumero === 0
console.log("O segundo numero é divisivel pelo segundo?", segundoNumeroEhDivisivel)