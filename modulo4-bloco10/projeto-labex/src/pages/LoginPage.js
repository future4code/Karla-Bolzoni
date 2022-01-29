import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from '@chakra-ui/react';
import axios from 'axios';
import { BASE_URL } from '../helpers/constants';
import { setToken } from '../helpers/localStorage';
import { ButtonComponent, ButtonGoBack, MainContainer, Container, Title, BoxButton } from '../components'
import useForm from '../hooks/useForm';

export const LoginPage = () => {
  const history = useHistory()
  const { form, onChange, cleanField } = useForm({
    email: "",
    password: ""
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    axios
      .post(`${BASE_URL}/login`, form)
      .then(({ data }) => {
        setToken(data.token)
        history.push('/admin/trips/list')
      })
      .catch((err) => console.log(err))
      cleanField()
  }
  return (
    <MainContainer>
      <Container>
        <Title> Página de login</Title>

        <form onSubmit={onSubmitLogin} >
          <Input
            name={'email'}
            value={form.email}
            onChange={onChange}
            placeholder={'email'}
            m='3'
            type={"email"}
            required
            color='white'
          />
          <Input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder={'senha'}
            m='3'
            pattern={"^.{6,}"}
            title={"A senha deve ter no mínimo 6 caracteress"}
            required
            type={"password"}
            color='white'
          />
          <BoxButton>
            <ButtonComponent type="submit" textButton="Entrar" />
            <ButtonGoBack />
          </BoxButton>

        </form>

      </Container>
    </MainContainer>
  )
}


