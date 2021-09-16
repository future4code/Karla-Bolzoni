/*EXERCÍCIO 1. 
Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
IMPRIME: a. Undefinned

array = null
console.log('b. ', array)
IMPRIME: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
IMPRIME: c. 11

let i = 0
console.log('d. ', array[i])
IMPRIME: d. array is not undefined

array[i+1] = 19
console.log('e. ', array)
IMPRIME: e. array is not undefined

const valor = array[i+6]
console.log('f. ', valor)
IMPRIME: f. array [i+6]

EXERCÍCIO 2. 
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

>>Qual será o valor impresso no console se a entrada do usuário for: 
"Subi num ônibus em Marrocos"?
 
IMPRESSO: SUBI NUM ÔNIBUS EM MIRROCOS 27*/

//Exercício 1:

let nomeDoUsuario = prompt("Qual seu nome?")
let emailDoUsuario = prompt("Qual seu email?")
let mensagemCadastro = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeDoUsuario}!`
console.log(mensagemCadastro)
 
//Exercício 2:
let minhasComidasPreferidas = ["lasanha", "sushi", "batata-frita", "churrasco", "massa"]
 
//a) Imprimindo na tela o array completo:
console.log(minhasComidasPreferidas)
 
//b) Imprimindo o array com uma mensagem:
let mensagemListaDeComida = `Essas são as minhas comidas preferidas:`
 
console.log(mensagemListaDeComida)
minhasComidasPreferidas.forEach(function(item, index){
    console.log(index,item)
})
 
//c) Trocando um item da lista, pelo item escolhido pelo usuário
let escolhaDoUsuario = prompt("Qual sua comida preferida?")
minhasComidasPreferidas.splice(1, 1, escolhaDoUsuario)
console.log(minhasComidasPreferidas)
 
//Exercício 3:
//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas = []

//b)pedindo 3 tarefas ao usuário:
let tarefa1 = prompt("Digita uma tarefa do seu dia:")
let tarefa2 = prompt("Digite mais uma tarefa do seu dia:")
let tarefa3 = prompt("Digite a última tarefa do seu dia:")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
 
//c) imprimindo o array na tela
console.log(listaDeTarefas)
 
//d) pedindo ao usuário que digite o índice da tarefa que já foi realizada:
let tarefaRealizada = prompt("informe o índice da tarefa que você realizou")
 
//e) removendo da lista o índice informado pelo usuário
listaDeTarefas.splice(tarefaRealizada,1)
console.log(listaDeTarefas)