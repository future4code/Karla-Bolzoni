import { BASE_URL } from '../helpers/constants';
import { Box } from '@chakra-ui/react'
import { CardTrip, Titulo, ButtonGoBack, ButtonComponent, Loader } from '../components';
import { useHistory } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { useRequestData } from '../hooks/useRequestData';
import React from 'react';


export const AdminHomePage = () => {
  const history = useHistory()

  useProtectedPage()
  const goTocreateTrip = () => history.push("/admin/trips/create")

  const goToHome = () => history.push("/")

  const goToTripDetails = (id) => history.push(`/admin/trips/${id}`)

  const tripList = useRequestData(`${BASE_URL}/trips`, {})

  const tripListAdmin = tripList.trips && tripList.trips.map((trip) => {
    return (
      <>
        <CardTrip
        key={trip.id}
          destino={trip.name}
          onClick={() => goToTripDetails(trip.id)}/>
      </>
    )
  })

  if (!tripListAdmin) return <Loader />
  return (
    <Box bg='gray.100' maxW='3xl'>
      <Titulo texto="Página Admin" />
      <ButtonGoBack />
      {tripListAdmin}

      <ButtonComponent onClick={goTocreateTrip} textButton="Criar Viagem" />
      <ButtonComponent onClick={goToHome} textButton="Logout" />
    </Box>
  )
};
