/*Exercício de interpretação de código:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

*/

//A)Explique o que o código faz. Qual o teste que ele realiza? O código recebe uma string do usuário e transforma em número. 
//Testa se é um número par, se for par imprime a mensagem que "Passou no teste", senão imprime "Não passou no teste".

//B) Para que tipos de números ele imprime no console "Passou no teste"? Para os números pares

//C) c) Para que tipos de números a mensagem é "Não passou no teste"? Para os números ímpares, ou seja, números que tiveram o resto da divisão por 2 diferente de zero.

/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    console.log('passei aqui')
    //break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
//a) Para que serve o código acima? O código serve informar o preço da fruta escolhida pelo usuário.

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta Maçã é R$2.25

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos 
//o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")? O preço da fruta  Pêra  é  R$  5
//Isto acontece pois quando um break não é colocado ele roda o caso seguinte independente do critério já ter sido correspondido.

/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/

//a) O que a primeira linha está fazendo? Pedindo que o usuário digite o primeiro número

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? Esse número passou no teste

//E se fosse o número -10? não ia aparecer nada no console.


//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. Sim, a variável mensagem não
//é conhecida, pois foi declarada dentro do escopo local e chamada no escopo global.

/*======================================================================
EXERCÍCIOS DE ESCRITA DE CÓDIGO:
=======================================================================*/

//Exercício 1


function verificaHabilitacao(){
    const idadeUsuario = Number(prompt("Qual sua idade?"))


    if(idadeUsuario>= 18){
        console.log("Você pode dirigir")
    }else{
        console.log("Você não pode dirigir.")
    }

}

//verificaHabilitacao()


//Exercício 2

function verificaTurno(){
    const turnoDaAula = prompt("Olá, informe em qual turno vocẽ estuda. Digite M para (matutino), V (Vespertino) ou N (Noturno).").toUpperCase()
    
    if(turnoDaAula === "M"){
        console.log("Bom dia :D")
    }else if(turnoDaAula === "V"){
        console.log("Boa tarde :D")
    }else if(turnoDaAula === "N"){
        console.log("Boa noite")
    }else{
        console.log("Digite uma opção válida por favor ==> M, V ou N")
    }
}
//verificaTurno()

//Exercício 3
function verificaTurnoSwitchCase(){

    switch (turnoDaAula.toUpperCase()) {
        case "M":
            console.log("Bom dia :D")
            break;
        case "V":
            console.log("Boa tarde :D")
            break; 
        case "N":
            console.log("Boa noite :D")
            break;
        default: console.log("Digite uma opção válida por favor ==> M, V ou N")
            break;
    }
}
//verificaTurnoSwitchCase()

//Exercício 4

function verificaCinema(){
    const generoFilme = prompt("Qual gênero de filme você vai assistir?").toLowerCase()
    const valorIngresso = Number(prompt("Quanto custa ingresso?"))

    if(generoFilme === "fantasia" && valorIngresso <= 15){
        const lanchinho = verificaLanchinho()
        console.log(`Bom filme, ${lanchinho}`)
    }else{
        console.log("Escolha outro amigo :D");
    }
}

verificaCinema()

//DESAFIO 1

function verificaLanchinho(){
    const lanche = prompt("Qual lanchinho você quer comprar?")

    const mensagem = `aproveite sua/seu ${lanche}`

    return mensagem
}

//DESAFIO 2
function vendaDeIngresso(){

    const nomeCompleto = prompt("Qual seu nome completo?")
    const tipoDeJogo = prompt("Qual o tipo de jogo que você vai assistr? IN ou DO")
    const etapaDoJogo = prompt("Qual a etapa do jogo? SF, DT ou FI")
    const categoriaIngresso = Number(prompt("Escolha uma categoria: 1, 2, 3 ou 4"))
    const quantidadeIngresso = Number(prompt("Quantos ingressos você deseja?"))

    const jogoEtapa={
        SF: [0, 1320,880,550,220],

        DT: [0, 660,440,330,170],

        FI: [0, 1980, 1320,880,330]
    }

    const etapaJogoCompleto = {
        SF: 'Semi-final',
        DT: 'Decisão do 3º lugar',
        FI: 'Final'
    }

    const valorIngresso = jogoEtapa[etapaDoJogo][categoriaIngresso]

    let calculaIngresso

    if(tipoDeJogo === "IN"){
        calculaIngresso = valorIngresso * 4.10 * quantidadeIngresso
        
    }else{
        calculaIngresso = valorIngresso * quantidadeIngresso
    }
    const mensagem = `---Dados da compra--- 
    Nome do cliente:  ${nomeCompleto} 
    Tipo do jogo:  ${tipoDeJogo === "IN" ? "Internacional" : "Doméstico"} 
    Etapa do jogo:  ${etapaJogoCompleto[etapaDoJogo]} 
    Categoria:  Categoria ${categoriaIngresso}
    Quantidade de Ingressos:  ${quantidadeIngresso} ingressos 
    ---Valores--- 
    Valor do ingresso:  R$ ${valorIngresso}
    Valor total:  R$ ${calculaIngresso}`

    console.log(mensagem)

}

vendaDeIngresso()