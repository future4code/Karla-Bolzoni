import React from 'react';
import styled from 'styled-components'
import iconeEnviar from '../icon-send.svg'
//import CampoConversa from '../CampoConversa/CampoConversa'

const ContainerMensagem = styled.div` 
padding: 0 2px;
width: 200px;
display: flex;
justify-content: flex-start;
margin-top: 5px;
border-radius: 8px;
border: none;
background-color: #262d31;
`

const Remetente = styled.p`
    font-weight: bold;
    color: white;

`
const TextoMensagem = styled.p` 
text-align: center;
padding-left: 5px;
color: white;
`

const ContainerMensagemSemRemetente = styled.div ` 
padding: 0 2px;
width: 200px;
display: flex;
justify-content: flex-end;
margin-top: 5px;
border-radius: 8px;
border: none;
background-color: #056162;
color: white;
`

const ContainerListaMensagem = styled.div ` 
display: flex;
justify-content: flex-end;


`
const MensagemSemRemetente = styled.p ` 
text-align: right;`

//ESTILIZAÇÃO INPUTS, CAMPO DE MENSAGEM
const ContainerEscreveMensagem = styled.div` 
display: flex;
height: 90px;
background-color: #1e2428;
align-items: center;
justify-content: space-around;
margin-top: 5px;
`
const CampoRemetente = styled.input` 
width: 20%;
height: 50%;
border-radius: 21px;
border: none;
font-size: 1.25em;
background-color: #33383b;
padding-left: 5px;
color: white;

`
const CampoMensagem = styled.input` 
width: 60%;
height: 50%;
border-radius: 21px;
border: none;
font-size: 1.25em;
background-color: #33383b;
padding-left: 5px;
color:white;
`

class CampoDeMensagem extends React.Component {
  state = {
    listaDeMensagem: [
    ],

    novoNome: "",
    novaMensagem: ""
  };

  adicionaMensagem = () => {
    const novaListaDeMensagem = {
      nome: this.state.novoNome,
      mensagem: this.state.novaMensagem
    }

    const copiaMensagem = [...this.state.listaDeMensagem, novaListaDeMensagem]

    this.setState({ listaDeMensagem: copiaMensagem, novaMensagem: "" })
  };

  onChangeNome = (event) => {
    this.setState({ novoNome: event.target.value })
  }

  onChangeMensagem = (event) => {
    this.setState({ novaMensagem: event.target.value })
  }
  render() {

    const listaDeComponentes = this.state.listaDeMensagem.map((cadaMensagem) => {


      const nome = cadaMensagem.nome.toLowerCase()
      if (nome === "eu") {
        return (
          <ContainerListaMensagem>
            <ContainerMensagemSemRemetente key={cadaMensagem.nome}>
              <MensagemSemRemetente>{cadaMensagem.mensagem}</MensagemSemRemetente>
            </ContainerMensagemSemRemetente>
          </ContainerListaMensagem>
        )
      } else {
        return (

          <ContainerMensagem key={cadaMensagem.nome}>
            <Remetente>{cadaMensagem.nome}:</Remetente>
            <TextoMensagem>{cadaMensagem.mensagem}</TextoMensagem>
          </ContainerMensagem>
        )
      }
    })

    return (

      <div>

        {listaDeComponentes}

        <ContainerEscreveMensagem>
          <CampoRemetente
            placeholder="Nome"
            onChange={this.onChangeNome}
            value={this.state.novoNome}
          />

          <CampoMensagem
            placeholder="Escreva sua mensagem"
            onChange={this.onChangeMensagem}
            value={this.state.novaMensagem}
          />

          <img onClick={this.adicionaMensagem} src={iconeEnviar} />



        </ContainerEscreveMensagem>

      </div>
    )
  }
}

export default CampoDeMensagem