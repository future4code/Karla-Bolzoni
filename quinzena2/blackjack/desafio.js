/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * */



const somaPontos = (mao) => {
  console.log("mao",mao);
  
  return mao.reduce(function(acumulador, obj) {
    return acumulador + obj.valor;
  });
}

const desejaComprarOutraCarta = (maoUsuario, maoComputador) => {
  console.log(maoUsuario);


  return confirm(
    `Suas cartas são ${maoUsuario[0].texto} ${maoUsuario[1].texto}. A carta revelada do computador é ${maoComputador[0].texto}.
    \n
    Deseja comprar mais uma carta?`
  )

}



function iniciarJogo() {

  const resposta = window.confirm("Boas vindas ao jogo de Blackjack! \n Quer iniciar uma nova rodada?")
  if (resposta === false) {
    alert("O jogo acabou!")
  } else {

    const usuario = saqueInicial()
    let pontosUsuario = somaPontos(usuario)

    const computador = saqueInicial()
    let pontosComputador = somaPontos(computador)
    while (desejaComprarOutraCarta(usuario, computador)) {
      
      usuario.push(comprarCarta())
      pontosUsuario = somaPontos(usuario)
      console.log(usuario, pontosUsuario)
      if(pontosUsuario > 21){
        console.log ("vc perdeu")
        break;
      }
  
    }



    if (pontosUsuario > pontosComputador) {
      console.log("Você venceu o/")
    } else if (pontosUsuario < pontosComputador) {
      console.log("Fim de jogo, você perdeu :( ")
    } else {
      console.log("o jogo empatou")
    }
  }
}

const sortearNovamente = mao => {
  if (mao[0].valor === 11 && mao[1].valor === 11) {
    const novaMao = [comprarCarta(), comprarCarta()]
    return novaMao
  } else {
    return mao
  }
}

const saqueInicial = () => {
  let mao = [comprarCarta(), comprarCarta()]
  mao = sortearNovamente(mao)
  return mao
}

//adicionando pontos aos pontos

iniciarJogo()

