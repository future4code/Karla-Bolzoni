import React from 'react';
import styled from 'styled-components'
import CampoDeMensagem from './CampoDeMensagem/CampoDeMensagem';

const Titulo = styled.h1 ` 
color: red;

`

const ContainerPrincipal = styled.div ` 
width: 400px;
/* background-color: gray; */
height: 70vh;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: auto;
border: 1px solid black;

`

class App extends React.Component {
  render() {
    return (
      <ContainerPrincipal>
        <Titulo>whatslab</Titulo>
        <CampoDeMensagem/>
      </ContainerPrincipal>

    )
  }
}

export default App;