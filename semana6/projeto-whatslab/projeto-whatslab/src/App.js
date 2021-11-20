import React from 'react';
import styled from 'styled-components'
import CampoDeMensagem from './CampoDeMensagem/CampoDeMensagem';
import planoDeFundo from './planoDeFundo.jpg'

const Titulo = styled.h1 ` 
color: #BEC7C7;

`

const ContainerPrincipal = styled.div ` 
width: 600px;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: auto;
border: 1px solid black;
background-image: url(${planoDeFundo});

`

class App extends React.Component {
  render() {
    return (
      <ContainerPrincipal>
        <Titulo>.</Titulo>
        <CampoDeMensagem/>
      </ContainerPrincipal>

    )
  }
}

export default App;