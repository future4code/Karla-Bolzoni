import React from 'react';
import { Titulo, ButtonComponent, MainContainer, BoxButton } from '../components';
import { useHistory } from "react-router-dom";


export const HomePage = (props) => {
  const history = useHistory()
  const goToListTrips = () => history.push("/trips/list")
  const goToLogin = () => history.push("/login")

  return (
    <MainContainer>
        <Titulo texto='' />
      <BoxButton>
        <ButtonComponent onClick={goToListTrips} textButton='Conferir Viagens'/>
        <ButtonComponent onClick={goToLogin} textButton='Fazer login'/>
      </BoxButton>
    </MainContainer>
  )
}
