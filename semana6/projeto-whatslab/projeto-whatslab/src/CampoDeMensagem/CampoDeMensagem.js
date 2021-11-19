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
`

const Remetente = styled.p`
    font-weight: bold;

`
const TextoMensagem = styled.p` 
text-align: center;
padding-left: 5px;

`

//ESTILIZAÇÃO INPUTS, CAMPO DE MENSAGEM
const ContainerEscreveMensagem = styled.div ` 
display: flex;
height: 90px;
background-color: #BEC7C7;
align-items: center;
justify-content: space-around;
`
const CampoRemetente = styled.input ` 
width: 20%;
height: 50%;
border-radius: 8px;
border: none

`
const CampoMensagem = styled.input ` 
width: 60%;
height: 50%;
border-radius: 8px;
border: none
`

class CampoDeMensagem extends React.Component {
  state = {
    listaDeMensagem: [
      {
        nome: "",
        mensagem: "",
      }
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

    this.setState({ listaDeMensagem: copiaMensagem, novaMensagem:"" })
  };

  onChangeNome = (event) => {
    this.setState({ novoNome: event.target.value })
  }

  onChangeMensagem = (event) => {
    this.setState({ novaMensagem: event.target.value })
  }
  render() {

    const listaDeComponentes = this.state.listaDeMensagem.map((cadaMensagem) => (

      <ContainerMensagem key={cadaMensagem.nome}>
        <Remetente>{cadaMensagem.nome}:</Remetente>
        <TextoMensagem>{cadaMensagem.mensagem}</TextoMensagem>
      </ContainerMensagem>
    )
    )

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
            placeholder="Mensagem"
            onChange={this.onChangeMensagem}
            value={this.state.novaMensagem}
          />

            <img onClick={this.adicionaMensagem} src={iconeEnviar}/>



        </ContainerEscreveMensagem>

      </div>
    )
  }
}

export default CampoDeMensagem