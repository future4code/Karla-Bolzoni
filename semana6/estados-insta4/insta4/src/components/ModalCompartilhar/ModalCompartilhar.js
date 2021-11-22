import React from 'react'
import styled from 'styled-components'
import iconeFacebook from '../../img/facebook.png'
import iconeInstagram from '../../img/instagram.png'
import iconeWhatsapp from '../../img/whatsapp.png'
import IconeRedeSocial from '../IconeRedeSocial/IconeRedeSocial'
//estlização

const ModalContainer = styled.div ` 
  display: flex;
  flex-direction: column;
` 

const Titulo = styled.h4 ` 
  text-align: center;
  margin: 2px;
`

const RedeSocialContainer = styled.div ` 
display: flex;
justify-content: space-around;
color: red;
`


//funções
export class ModalCompartilhar extends React.Component {
  state = {
    modalAberto: false,
    mensagemCompartilhar: " ",
  }


  // onClickCompartilhar = (event, a) => {
  //   console.log(event.target)

  // }

  onClickCompartilharFace = () => {
    console.log("fui compartilhado no facebook")
  }

  onClickCompartilharInsta = () => {
    console.log("fui compartilhado no instagram")
  }
render() {

  return (
    <ModalContainer>
      <Titulo>Compartilhar:</Titulo>
      <RedeSocialContainer> 
        <IconeRedeSocial 
        iconeRedeSocial={iconeFacebook} 
        onClickRedeSocial={this.onClickCompartilharFace}
        nome={"facebook"}
        />
        <IconeRedeSocial 
        iconeRedeSocial={iconeInstagram}
        onClickRedeSocial={this.onClickCompartilharInsta}
        nome={"instagram"}
        />
        <IconeRedeSocial 
        iconeRedeSocial={iconeWhatsapp}
        onClickRedeSocial={this.onClickCompartilhar}
        nome={"whats"}
        />
      </RedeSocialContainer>
    </ModalContainer>


  )
}


}
