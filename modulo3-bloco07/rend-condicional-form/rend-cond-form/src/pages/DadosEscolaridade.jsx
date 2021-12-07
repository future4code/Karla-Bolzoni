import React from "react"
import styled from 'styled-components'

const ContainerPrincipal = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;
`




class DadosEscolaridade extends React.Component {

  render() {
    return (
      <ContainerPrincipal>
        
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

        <form>
          <h3>5. Qual seu curso?</h3>
          <input
            // value={this.state.inputCurso}
            // onChange={this.handleCurso}
          />

          <h3>6. Qual a unidade de ensino?</h3>
          <input
            // value={this.state.inputIdade}
            // onChange={this.handleIdade}
          />
       </form>

      </ContainerPrincipal>
    )
  }

}

export default DadosEscolaridade;