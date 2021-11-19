import React from 'react';
import styled from 'styled-components'
import CampoConversa from '../CampoConversa/CampoConversa'

const ContainerCampoMensagem = styled.div` 
display: grid;
width: 100%;
grid-template-columns: 90px 3fr 1fr;
grid-template-rows:1fr;
`
const Input = styled.input`
padding: 8px;
`


class CampoMensagem extends React.Component {

  state = {
    listaDeMensagem: [
      {
        nome: "",
        mensagem: "",
      }
    ],
    nome: "",
    mensagem: "",
  }

  mudaNome = (event) => {
    this.setState({ nome: event.target.value });
  }

  mudaMensagem = (event) => {
    this.setState({mensagem: event.target.value })
  }

  enviaMensagem = () => {
    this.setState({ mensagemEnviada: !this.state.mensagemEnviada })
  }



  enviaMensagem = () => {
    //Adciona uma mensagem na lista
    const novaMensagemEnviada = {
      nome: this.state.nome,
      mensagem: this.state.mensagem
    }

    const novaListaDeMensagens = [...this.state.listaDeMensagem, novaMensagemEnviada]

    console.log(novaListaDeMensagens)

    this.setState({listaDeMensagem: novaListaDeMensagens})
  }


  render() {
    const mostraMensagem = () => {
      return (
        <div>
          <CampoConversa listaDeMensagem={this.state.listaDeMensagem}/>
        </div>
      )
    }

    return (

      <div>
        {mostraMensagem()}

        <ContainerCampoMensagem>
          <Input value={this.state.nome} onChange={this.mudaNome} placeholder="nome" />
          <Input value={this.state.mensagem} onChange={this.mudaMensagem} placeholder="mensagem" />
          <button onClick={this.enviaMensagem}>Enviar</button>
        </ContainerCampoMensagem>
      </div>
    )
  }

}

export default CampoMensagem;