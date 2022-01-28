import styled from "styled-components";
import React from 'react';
import galaxy from '../galaxy.jpg'

export const MainContainer = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
justify-content: space-around;
background-color: yellow;
margin: auto;
background-image: url(${galaxy});
`
export const Container = styled.div ` 
background-color: #ffffff10;
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
width: 80%;
padding: 50px;
`
export const BoxButton = styled.div` 
display: flex;
padding: 5px;
column-gap: 20px;
margin: 30px;
`
export const ContainerForm = styled.div ` 
width: 40%;
`
export const Styled = () => {
  return <div>
    <MainContainer>
    <BoxButton>
    </BoxButton>
    <Container/>
    <ContainerForm/>
    </MainContainer>
      
    </div>
};

