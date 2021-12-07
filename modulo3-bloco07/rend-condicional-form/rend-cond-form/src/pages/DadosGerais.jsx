import React from "react"
import styled from 'styled-components'

const ContainerPrincipal = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;`

class DadosGerais extends React.Component {

  state = {
    dadosIdentificacao: [
      {
        nome: "",
        idade: "",
        email: "",
        escolaridade: ""
      }
    ],

    inputNome: "",
    inputIdade: "",
    inputEmail: "",
    inputEscolaridade: "",
  }

  render() {
    return (
      <ContainerPrincipal>
        
        <h1>ETAPA 1 - DADOS GERAIS</h1>

        <form>
          <h3>1. Qual seu nome?</h3>
          <input
            value={this.state.inputNome}
            onChange={this.handleNome}
          />

          <h3>2. Qual sua idade?</h3>
          <input
            value={this.state.inputIdade}
            onChange={this.handleIdade}
          />

          <h3>3. Qual seu email?</h3>
          <input
            value={this.state.inputEmail}
            onChange={this.handleEmail}
          />

          <h3>4. Qual sua escolaridade?</h3>
           
          <select 
          value={this.state.selectEscolaridade} 
          onChange={this.handleSelectEscolaridade}>
            <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
            <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
            <option value="Ensino Superior Completo">Ensino Superior Completo</option>
            
          </select>
        </form>

      </ContainerPrincipal>
    )
  }

}

export default DadosGerais;
