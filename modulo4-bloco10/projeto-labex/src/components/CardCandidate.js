import React from 'react';
import styled from 'styled-components';
import {ButtonComponent} from '../components';

const Cardzao = styled.div`
border: 1px black solid;
margin: 5px;
border-radius: 5px;
padding: 5px;
`
export const CardCandidate = (props) => {
  return (
  <Cardzao>
      <p>Nome: {props.name}</p>
      <p>Proifissão: {props.profession}</p>
      <p>Idade: {props.age}</p>
      <p>País{props.country}</p>
      <p>Aplicação: {props.applicationText}</p>
      

      <ButtonComponent textButton='Aprovar'/>
      <ButtonComponent textButton='Reprovar'/>
  </Cardzao>
  );
};

