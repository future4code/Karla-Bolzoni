import React from 'react';
import Titulo from '../components/Titulo';
import ButtonComponent from '../components/ButtonComponent';
import ButtonGoBack from '../components/ButtonGoBack';
import { Input } from '@chakra-ui/react';
import { Container } from './ListTripsPage';
import styled from 'styled-components';
import { Stack } from '@chakra-ui/react';


const ContainerForm = styled.div ` 
width: 50%;
`

const ApplicationFormPage = () => { 
  
  return (
    <Container>
      <Titulo texto="Formulário de aplicação"/>

      <ContainerForm>
        <Input placeholder='Basic usage' m='3'/>
        <Input placeholder='Basic usage' m='3'/>
        <Input placeholder='Basic usage' m='3'/>
        <Input placeholder='Basic usage' m='3'/>
      </ContainerForm>

      <Stack spacing={4} direction='row' align='center'>
      <ButtonGoBack/>
      <ButtonComponent textButton='Enviar'/> 
      </Stack> 
    </Container>
  )
}

export default ApplicationFormPage;
