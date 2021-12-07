import React from 'react';
import styled from 'styled-components'
import CampoDeMensagem from '../CampoDeMensagem/CampoDeMensagem'

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

class CampoConversa extends React.Component {
  
  render () {

    const listaDeComponentes = this.props.state.listaDeMensagem.map((cadaMensagem) => {
      return(

      <ContainerMensagem key={cadaMensagem.props.nome}>
        <Remetente>{cadaMensagem.props.nome}:</Remetente>
        <TextoMensagem>{cadaMensagem.props.mensagem}</TextoMensagem>
      </ContainerMensagem>
      )
      })
    return (
      <div>
        {listaDeComponentes}
      </div>

    )
  }
}

export default CampoConversa