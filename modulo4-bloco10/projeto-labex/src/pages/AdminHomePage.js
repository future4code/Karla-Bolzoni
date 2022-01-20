import React from 'react';
import Header from '../components/Header';
import { Box } from '@chakra-ui/react'
import Titulo from '../components/Titulo';
import ButtonGoBack from '../components/ButtonGoBack';
import ButtonComponent from '../components/ButtonComponent';
import { useHistory } from 'react-router-dom';
import CardTrip from '../components/CardTrip';

const AdminHomePage = () => {
  const history = useHistory()

  const goTocreateTrip = () => {
    history.push("/admin/trips/create")
  }

  const goToHome = () => {
    history.push("/")
  }

const goToTripDetails = () => {
  history.push("/admin/trips/:id")
}
  return (
    <Box bg='gray.100' maxW='3xl'>
      <Titulo texto="Página Admin" />
      <ButtonGoBack />
      <CardTrip onClick={goToTripDetails}/>
      <ButtonComponent onClick={goTocreateTrip} textButton="Criar Viagem" />
      <ButtonComponent onClick={goToHome} textButton="Logout" />

    </Box>
  )
};

export default AdminHomePage;
