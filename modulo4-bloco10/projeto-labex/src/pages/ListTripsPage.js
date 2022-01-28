import React from 'react';
import { useHistory } from "react-router-dom";
import { Stack } from '@chakra-ui/react';
import { useRequestData } from '../hooks/useRequestData'
import styled from 'styled-components';
import { ButtonComponent, Titulo, ButtonGoBack, CardTrips} from '../components'
import { BASE_URL } from '../helpers/constants';

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

  const tripList = useRequestData(`${BASE_URL}/trips`, {})

  const tripListComponent = tripList.trips && tripList.trips.map((tripChoice) => {
    return (
      <CardTrips
        key={tripChoice.id}
        nametrip={tripChoice.name}
        planet={tripChoice.planet}
        date={tripChoice.date}
        description={tripChoice.description}
        durationInDays={tripChoice.durationInDays}
        id={tripChoice.id} />
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


