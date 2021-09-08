/*questão 1: Diga o que será impresso no console.
let a = 10
let b = 10

console.log(b)
>>> Imprime: 10

b = 5

console.log(a, b)
>>> Imprime: 10, 5

Questão 2: Diga o que será impresso no console.
let a = 10
let b = 20
let c
c = a 10
b = c 10
a = b 10

console.log(a, b, c)
>>> Imprime 10,10,10

Questão 3: Sugerindo nomes significativos para variáveis
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

>>> REESCREVENDO
let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")
let valorRecebidoDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorRecebidoDia/horasTrabalhadasDia} por hora`)*/

/*EXERCÍCIOS DE ESCRITO DE CÓDIGO
Questão 1: declarando uma variável para armazenar nome e idade sem atribuir valor*/
let nome  
let idade

// imprimindo na tela o tipo das variáveis
console.log (typeof nome)
console.log (typeof idade)

/*tipo impresso no console: 
undefined
undefined
resultou este tipo UNDEFINED pois não foram atribuídos valores
para as variáveis declaradas, valores indefinidos.*/

//Perguntando ao usuário o nome e idade:
nome = prompt("Qual seu nome?")
idade = prompt("Qual a sua idade?")
 
console.log(typeof nome)
console.log(typeof idade)

/*tipo impresso no console: 
string
string
Este tipo foi impresso,pois prompt sempre retorna o valor como uma STRING*/

console.log("Olá", nome, "você tem", idade, "anos.")

// EXERCICIO 2 - Criando programa com 3 perguntas de sim ou não
let primeiraPergunta = prompt("Você está com fome?")
let segundaPergunta = prompt("Você gosta de lasanha?")
let terceiraPergunta = prompt("Você está com sede?")

//>>> Imprimindo no console:
console.log("Você está com fome?", primeiraPergunta)
console.log("Você gosta de lasanha?", segundaPergunta)
console.log("Você está com sede?", terceiraPergunta)


//EXERCÍCIO 3 - trocando o valor das variáveis.
let a = 10
let b = 25
let c

c=a
a=b
b=c

console.log(a, b)
