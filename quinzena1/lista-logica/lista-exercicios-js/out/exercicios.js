// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let alturaRetangulo = Number(prompt("Informe a altura do retângulo:"))
  let larguraRetangulo = Number(prompt("Informe a largura do retângulo:"))
  let areaRetangulo = alturaRetangulo * larguraRetangulo

  console.log(areaRetangulo)

}

// Exercício 2
function imprimeIdade() {
  let anoAtual = Number(prompt("Em qual ano estamos?"))
  let anoNascimentoUsuario = Number(prompt("Em qual ano você nasceu?"))
  let idadeUsuario = anoAtual - anoNascimentoUsuario
  
  console.log(idadeUsuario)

}

// Exercício 3
function calculaIMC() {
  let pesoUsuario = Number(prompt("Informe seu peso em kg:"))
  let alturaUsuario = Number(prompt("Informe sua altura em metros"))
  let calculandoImc = pesoUsuario / (alturaUsuario * alturaUsuario)

  console.log(calculandoImc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual seu nome?")
  let idade = Number(prompt("Qual sua idade?"))
  let email = prompt ("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Qual sua 1ª cor preferida?")
  let cor2 = prompt("Qual sua 2ª cor preferida?")
  let cor3 = prompt("Qual sua 3ª cor preferida?")

  let arrayCoresPreferidas = []
  arrayCoresPreferidas.push(cor1,cor2,cor3)
  console.log(arrayCoresPreferidas)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  let palavraUsuario = prompt("Digite a primeira palavra que vier na sua cabeça:")
  let palavraUsuarioMaiusculo = palavraUsuario.toUpperCase()
  console.log(palavraUsuarioMaiusculo)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let valorEspetaculo = Number(prompt("Quanto custará ao todo este espetáculo?"))
  let valorIngresso = Number(prompt("Quanto custará cada ingresso?"))
  let quantidadeIngressosParaVender = valorEspetaculo / valorIngresso
  console.log(quantidadeIngressosParaVender)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  let string1 = prompt("Escreva uma palavra que comece com a letra A")
  let string2 = prompt("Escreva uma palavra que comece com a letra B")
  let stringsTemMesmoTamanho = string1.length === string2.length
  console.log(stringsTemMesmoTamanho)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let string1 = prompt("Escreva uma palavra")
  let string2 = prompt("Escreva outra palavra")

  let comparaString = string1.toUpperCase() === string2.toUpperCase()
  console.log(comparaString)

}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Em qual ano estamos?"))
  const anoNascimento = Number(prompt("Em qual ano você nasceu?"))
  const emissaoRg = Number(prompt("Em qual ano você emitiu seu RG?"))
  const idade = anoAtual - anoNascimento
  const duracaoUltimoRg = anoAtual-emissaoRg
   

  const precisaRenovaCarteiraA =  idade <= 20 && duracaoUltimoRg >= 5

  const precisaRenovaCarteiraB = idade > 20 && idade <= 50 && duracaoUltimoRg >= 10

  const precisaRenovaCarteiraC = idade > 50 && duracaoUltimoRg >= 15 

  const renvocaoCarteiraIdentidade = precisaRenovaCarteiraA || precisaRenovaCarteiraB || precisaRenovaCarteiraC

  console.log(renvocaoCarteiraIdentidade)

}

// Exercício 11
function checaAnoBissexto() {
  const anoEscolhido = Number(prompt("Escolha um ano"))
  const ehBissextoCond1 = anoEscolhido % 400 === 0
  const ehBissextoCond2 = anoEscolhido % 4 === 0 && anoEscolhido % 100 !== 0 
   
  const ehBissexto = ehBissextoCond1 || ehBissextoCond2
  
  console.log(ehBissexto)
}
// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Qual sua idade?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Vocoê possui disponibilidade exclusiva durantes os horários do curso?")

  const ehMaiorDeIdade = idade === "sim"
  const temEnsinoMedio = escolaridade === "sim"
  const temDisponibilidade = disponibilidade === "sim"

  const inscricaoEhValida = ehMaiorDeIdade && temEnsinoMedio && temDisponibilidade

  console.log(inscricaoEhValida)
  
}