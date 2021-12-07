import React from "react"
import DadosGerais from './pages/DadosGerais'
import DadosEscolaridade from './pages/DadosEscolaridade'
import QuestionarioEducacional from './pages/QuestionarioEducacional'
import PaginaAgradecimento from './pages/PaginaAgradecimento'
import styled from 'styled-components'
// import imagemFundo from './imagemFundo.jpg'

const Container = styled.div` 
width: 70%;
margin: auto;
background-color: #ffffff10;
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border-radius: 5px;
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 70vh;
`

const Botao = styled.button ` 
padding: 15px;
font-size: 15px;
cursor: pointer;

`

class App extends React.Component {

  state = {
    etapa: 1,
  }

  proximaEtapa = () => {
    this.setState({etapa: this.state.etapa+1})

  }
  renderizaEtapa = () => {
    console.log(this.state)
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />;

      case 2:
        return <DadosEscolaridade />;

      case 3:
        return <QuestionarioEducacional />;
      case 4:
        return <PaginaAgradecimento />

      default:
        return <p>Nenhuma seção selecionada</p>


    }
  }

  render() {
    
    return (
      <Container>
        {/* <DadosGerais/>
        <DadosEscolaridade/>
        <QuestionarioEducacional/>
        <PaginaAgradecimento/> */}

        {this.renderizaEtapa()}
        <Botao onClick={this.proximaEtapa}>Próxima Etapa</Botao>
      
      </Container>
    )
  }

}

export default App;
