import React from 'react';
import styled from 'styled-components'

const Icone = styled.img`
  width: 30px;
  margin-right: 10px;
`
const ContainerPequeno = styled.div ` 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black;
  margin: 0.625em;  
`

const ContainerDeInformacao = styled.div ` 
  display: flex;
  align-items: center;
  padding: 10px;
`

const TituloItem = styled.p`
 font-weight: bold;
`

function CardPequeno(props) {
  return (
    <ContainerPequeno>
      <ContainerDeInformacao>
      <Icone src={ props.imagem}/>
      <TituloItem>{props.texto}</TituloItem>
      <p>{props.email}</p>
      </ContainerDeInformacao>

  </ContainerPequeno>
  )
}

export default CardPequeno;