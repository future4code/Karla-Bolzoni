/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//2 jogadores

let usuario 
let computador


const somaPontos = (mao) => {
  return mao[0].valor + mao[1].valor
}

const montaFrase = (mao) => {
  return ` ${mao[0].texto} ${mao[1].texto} - pontuação  ${somaPontos(mao)}`
}

const saqueInicial = () =>{
  let novaMao = [comprarCarta(), comprarCarta()]
  return novaMao
}

function iniciarJogo() {
  const resposta = window.confirm("Quer iniciar uma nova rodada?")
  if(resposta === false) {
    console.log("O jogo acabou!")
  } else {

    console.log("Boas vindas ao jogo de Blackjack!")

    const usuario = saqueInicial()
    const pontosUsuario = somaPontos(usuario)
    console.log(`Usuário - cartas: ${montaFrase(usuario)}`)
    

    const computador = saqueInicial()
    const pontosComputador = somaPontos(computador)
    console.log(`Computador ${montaFrase(computador)}`);

    if (pontosUsuario > pontosComputador) {
      console.log("Você venceu o/")
    } else if (pontosUsuario < pontosComputador) {
      console.log("Fim de jogo, você perdeu :( ")
    } else {
      console.log("o jogo empatou")
    }
  }
}
iniciarJogo()

