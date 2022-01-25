import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import Titulo from '../components/Titulo';
import { useHistory } from "react-router-dom";
import { Stack } from '@chakra-ui/react';
import ButtonGoBack from '../components/ButtonGoBack';
import useRequestData from '../hooks/useRequestData'
import CardTrips from '../components/CardTrips';
import styled from 'styled-components';

const ContainerTripList = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 70vh;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
export const Container = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;
width: 100wh;
`


export const ListTripsPage = () => {
  const history = useHistory()

  const goToApplicationTrip = () => history.push("/trips/application")

  const tripList = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/karla-natany-joy/trips", {})

  const tripListComponent = tripList.trips && tripList.trips.map((trip) => {
    return (
      <CardTrips
        key={trip.name}
        nameTrip={trip.name}
        planet={trip.planet}
        date={trip.date}
        description={trip.description}
        durationInDays={trip.durationInDays} />
    )
  })

  return (
    <Container>
      <Titulo texto='Viagens programadas' />

      <ContainerTripList>
        {tripListComponent}
      </ContainerTripList>

      <Stack spacing={4} direction='row' align='center'>
        <ButtonGoBack />
        <ButtonComponent onClick={goToApplicationTrip} textButton='Quero me inscrever' />
      </Stack>
    </Container>
  )
}


