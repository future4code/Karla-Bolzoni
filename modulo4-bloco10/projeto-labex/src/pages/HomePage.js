import React from 'react';
import { Titulo, ButtonComponent, MainContainer, BoxButton, Container } from '../components';
import { useHistory } from "react-router-dom";


export const HomePage = (props) => {
  const history = useHistory()
  const goToListTrips = () => history.push("/trips/list")
  const goToLogin = () => history.push("/login")

  return (
    <MainContainer>
      <Container>
        <Titulo texto='' />
      <BoxButton>
        <ButtonComponent onClick={goToListTrips} textButton='Conferir Viagens'/>
        <ButtonComponent onClick={goToLogin} textButton='Fazer login'/>
      </BoxButton>
      </Container>
    </MainContainer>
  )
}
