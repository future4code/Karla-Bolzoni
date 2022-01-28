import styled from "styled-components";
import React from 'react';

export const MainContainer = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;
width: 100wh;
height: 80vh;
justify-content: space-around;
`
export const BoxButton = styled.div` 
display: flex;
padding: 5px;
column-gap: 20px;
margin: 30px;
`
export const Styled = () => {
  return <MainContainer>
    <p>teste</p>
    <BoxButton>
     
    </BoxButton>
    </MainContainer>
};

