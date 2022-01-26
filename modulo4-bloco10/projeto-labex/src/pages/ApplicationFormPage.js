import React from 'react';
import { Input } from '@chakra-ui/react';
import { Container } from './ListTripsPage';
import styled from 'styled-components';
import { Stack } from '@chakra-ui/react';
import { ButtonComponent, ButtonGoBack, Titulo } from '../components'

export const ContainerForm = styled.div ` 
width: 40%;
`

export const ApplicationFormPage = () => { 
  
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

