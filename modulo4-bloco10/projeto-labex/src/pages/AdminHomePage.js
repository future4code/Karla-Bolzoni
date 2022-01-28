import { BASE_URL } from '../helpers/constants';
import { CardTrip, Titulo, ButtonGoBack, ButtonComponent, Loader, MainContainer, BoxButton } from '../components';
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
          onClick={() => goToTripDetails(trip.id)} />
      </>
    )
  })

  if (!tripListAdmin) return <Loader />
  return (
    <MainContainer>

      <Titulo texto="Administrar viagens" />

      {tripListAdmin}

      <BoxButton>
        <ButtonComponent onClick={goTocreateTrip} textButton="Criar Viagem" />
        <ButtonComponent onClick={goToHome} textButton="Logout" />
        <ButtonGoBack />
      </BoxButton>

    </MainContainer>
  )
};
