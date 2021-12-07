import React from "react"
import styled from 'styled-components'

const ContainerPrincipal = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;`



class PaginaAgradecimento extends React.Component {

  render() {
    return (
      <ContainerPrincipal>
        
        <h1>O FORMULÁRIO ACABOU</h1>

        <p>Muito obrigada por participar! Entraremos em contato!</p>
      </ContainerPrincipal>
    )
  }

}

export default PaginaAgradecimento;