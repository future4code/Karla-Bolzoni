import React from 'react';
import ButtonGoBack from '../components/ButtonGoBack';
import Titulo from '../components/Titulo';
import { useHistory } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import { Input, Stack } from '@chakra-ui/react';
import { ContainerForm } from './ApplicationFormPage';
import { Container } from './ListTripsPage'

export const LoginPage = () => {
  const history = useHistory()

  const goToAdminHomePage = () => history.push("admin/trips/list")

  return (
    <Container>
      <Titulo texto="Página de login"/>
      <ContainerForm>
        <Input placeholder='email' m='3'/>
        <Input placeholder='senha' m='3'/>

        </ContainerForm>
        <Stack spacing={4} direction='row' align='center'>
      <ButtonGoBack/>
      <ButtonComponent onClick={goToAdminHomePage} textButton="Entrar"/>
      </Stack>
    </Container>
  )
}


