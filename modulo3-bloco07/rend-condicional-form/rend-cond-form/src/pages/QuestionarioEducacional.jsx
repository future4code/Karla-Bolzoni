import React from "react"
import styled from 'styled-components'

const ContainerPrincipal = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;`



class QuestionarioEducacional extends React.Component {

  render() {
    return (
      <ContainerPrincipal>
        
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

        <form>
          <h3>5. Por que você não terminou um curso de graduação?</h3>
          <input
            // value={this.state.inputCurso}
            // onChange={this.handleCurso}
          />

          <h3>6. Você fez algum curso complementar?</h3>
          <input
            // value={this.state.inputIdade}
            // onChange={this.handleIdade}
          />
       </form>

      </ContainerPrincipal>
    )
  }

}

export default QuestionarioEducacional;