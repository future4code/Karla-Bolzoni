import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Stack } from '@chakra-ui/react';
import { ContainerForm } from './ApplicationFormPage';
import { Container } from './ListTripsPage'
import axios from 'axios';
import { BASE_URL } from '../helpers/constants';
import { setToken } from '../helpers/localStorage';
import { ButtonComponent, Titulo, ButtonGoBack} from '../components'

export const LoginPage = () => {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleName = ({target}) => setEmail(target.value)

  const handleSenha = ({target}) => setSenha(target.value)

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: senha
    }
    axios
    .post(`${BASE_URL}/login`, body)
    .then(({data}) => {
      setToken(data.token)
      history.push('/admin/trips/list')
    })
    .catch((err) => console.log(err))
  }
  return (
    <Container>
      <Titulo texto="Página de login"/>
      <ContainerForm>
        <Input 
          value={email}
          onChange={handleName}
          placeholder='email' 
          m='3'
        />
        <Input 
          value={senha}
          onChange={handleSenha}
          placeholder='senha' 
          m='3'
        />
      </ContainerForm>
  
      <Stack spacing={4} direction='row' align='center'>
        <ButtonGoBack/>
        <ButtonComponent onClick={onSubmitLogin} textButton="Entrar"/>
      </Stack>
    </Container>
  )
}


