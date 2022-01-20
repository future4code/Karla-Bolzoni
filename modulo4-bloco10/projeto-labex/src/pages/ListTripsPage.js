import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import CardTrip from '../components/CardTrip';
import Titulo from '../components/Titulo';
import { useHistory } from "react-router-dom";
import { Stack } from '@chakra-ui/react';
import ButtonGoBack from '../components/ButtonGoBack';

const ListTripsPage = () => {
  const history = useHistory()

  const goToApplicationTrip = () => {
    history.push("/trips/application")
  }

  return (
    <div>
      <Titulo texto='Viagens programadas' />
     
      <Stack spacing={4} direction='row' align='center'>
        <ButtonGoBack/>
        <ButtonComponent onClick={goToApplicationTrip} textButton='Quero me inscrever' />
      </Stack>

    </div>
  )
};

export default ListTripsPage;
