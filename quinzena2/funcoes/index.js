/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
1.a) 10 50

1.b) Não apareceria nada no console, mas o calcúlo seria feito normalmente, apenas não conseguiriamos visualizar.

2.a) Esta função pega o texto inserido pelo usuário, transforma em letras minúsculas e procura se no texto tem a palavar cenoura.
Tem como utilidade realizar um filtro ou uma busca, desconsiderando o case da string.
2.b) i- true ii- true iii-false*/

//1.a) escrevendo uma função que não recebe nenhum parâmetro e deve imprimir algumas informações:
function informacoesPessoais(){
    let nome = "Natany" 
    let idade = 27
    let cidade = "Guaíba"
    let ocupacao = "estudante da Labenu" 

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`) 
}
informacoesPessoais()

//1.b) Escrevendo a função recebendo parâmetros e imprimindo no console
function informacoesDoUsuario(nome, idade, cidade, profissao) {
    let mensagem = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    console.log(mensagem) 
}
informacoesDoUsuario('nome', 'idade', 'cidade', 'profissao')

//2.a) Função recebendo 2 nº como parâmetros e retornando o resultado da soma. 
function somandoNumeros(numero1, numero2){
    const soma = numero1 + numero2
    const resultado = `a soma de ${numero1} + ${numero2} é igual a ${soma}.`

    return resultado
}
console.log(somandoNumeros(3,5))
//--------------------------------------------------------------------------------

//2.b) Função recebendo 2 nº e retornando boolean se o primeiro nº é maior que o segundo nº.
function retornandoBooleano(numero1, numero2){
    const comparacao = numero1 >= numero2
    const resultado = `O número ${numero1} é maior ou igual a ${numero2}? ${comparacao}`

    return resultado
}
console.log(retornandoBooleano(1,2))
//---------------------------------------------------------------------------------

//2.c) FUNÇÃO VERIFICANDO SE UM NÚMERO ÉPAR

function verificaNumeroPar(numero){
    //Dividindo o nº recebido por 2
    const verificacao = numero % 2
    //verificando se divisou teve resto zero
    const verificaResto = verificacao === 0
    // escrevendo o resultado
    const resultado = `o numero ${numero} é par? ${verificaResto}`

    return resultado
}
console.log(verificaNumeroPar(4))
//----------------------------------------------------------------------------------


//2.d) FUNÇÃO TRANSFORMANDO A MENSAGEM EM MAIÚSCULA E CONTANDO O TAMANHO.

function mensagemMaiuscula(mensagem){
    const transformaMsg = mensagem.toUpperCase()
    const contaString = mensagem.length
    
    return `${transformaMsg} - (Esta mensagem contém ${contaString} caracteres)`

}
console.log(mensagemMaiuscula('oi tudo bem gente?'))
//-----------------------------------------------------------------------------------


//3) FUNÇÃO 4 OPERÇÕES MATEMÁTICA, RECEBENDO VALOR DO USUÁRIO E IMPRIMINDO OS 4 RESULTADOS NO CONSOLE

function soma(numero1, numero2){
    const soma = numero1 + numero2
    return soma 
}

function subtracao(numero1, numero2) {
    const resultado = numero1 - numero2
    return resultado
}

function divisao(numero1, numero2) {
    const resultado = numero1 / numero2
    return resultado
}

function multiplicacao(numero1, numero2) {
    const resultado = numero1 * numero2
    return resultado    
}


function resultadoValores(){
    const numeroUm = Number(prompt("Digite um número:"))
    const numeroDois = Number(prompt("Digite um número:"))
    
    console.log(soma(numeroUm, numeroDois), subtracao(numeroUm, numeroDois), divisao(numeroUm, numeroDois), multiplicacao(numeroUm, numeroDois));
}
resultadoValores()