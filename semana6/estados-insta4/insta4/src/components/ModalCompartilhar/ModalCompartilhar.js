import React from 'react'
import styled from 'styled-components'
import iconeFacebook from '../../img/facebook.png'
import iconeInstagram from '../../img/instagram.png'
import iconeWhatsapp from '../../img/whatsapp.png'

//estlização

const ModalContainer = styled.div ` 
  display: flex;
  flex-direction: column;
` 

const Titulo = styled.h4 ` 
  text-align: center;
  margin: 2px;
`

const RedeSocialContainer = styled.p ` 
display: flex;
justify-content: space-around;
  color: red;
`

const IconeRedeSocial = styled.img ` 
opacity: 80%;
width: 30px;
transition: .5s;
cursor: pointer;
&:hover {
    opacity: 100%;
  }

`
//funções
export class ModalCompartilhar extends React.Component {
  state = {
    modalAberto: false,
    mensagemCompartilhar: " ",
  }


  onClickCompartilhar = () => {
    console.log("compartilhado no facebook")

  }
render() {

  return (
    <ModalContainer>
      <Titulo>Compartilhar:</Titulo>
      <RedeSocialContainer> 
        <IconeRedeSocial 
        src={iconeFacebook} 
        onClick={this.onClickCompartilhar}
        />
        <IconeRedeSocial src={iconeInstagram}/>
        <IconeRedeSocial src={iconeWhatsapp}/>
      </RedeSocialContainer>
    </ModalContainer>


  )
}


}
