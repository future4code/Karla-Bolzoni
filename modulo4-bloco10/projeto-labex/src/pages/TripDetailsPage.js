import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../helpers/constants';
import { useProtectedPage } from '../hooks/useProtectedPage'
import { useParams } from 'react-router-dom';
import {
  ButtonGoBack,
  Titulo,
  Loader,
  CardTrips,
  CandidateTableRow,
  MainContainer,
  Container
} from '../components'
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { MainTable } from '../components/MainTable';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    auth: localStorage.getItem("token")
  }
}
export const TripDetailsPage = () => {
  const [trip, setTrip] = useState({})
  const { id } = useParams()

  useProtectedPage()

  useEffect(() => {
    getTrip(id);
  }, [id])

  const getTrip = async (id) => {
    const { data } = await axios.get(`${BASE_URL}/trip/${id}`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    setTrip(data.trip)
  }

  const decideCandidate = (tripId, candidateId, isApproved) => {
    const body = {
      approve: isApproved
    }
    axios
      .put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, axiosConfig)
      .then((res) => {
        alert(`${isApproved ? "Aprovado" : "Rejeitado"} com sucesso`)
        getTrip(tripId)
      })
      .catch((err) => console.log(err))
  }

  const candidatesPedents = trip.candidates && trip.candidates.map((candidate) => {
    candidate.tripId = trip.id
    return candidate

  })

  const confirmedCandidates = trip.approved && trip.approved.map((candidateApproved) => {
    candidateApproved.tripId = trip.id
    return candidateApproved
  })

  if (!trip) return <Loader/>
  return (
    <MainContainer>
      <Container>
        <Titulo texto="Detalhes da viagem" />
        <CardTrips
          nameTrip={trip.name}
          planet={trip.planet}
          date={trip.date}
          description={trip.description}
          durationInDays={trip.durationInDays}
        />
        <MainTable
          title='Candidados Pendentes'
          bodyTable={candidatesPedents}
          showOptions={true}
          decideCandidate={decideCandidate}
        />
        <MainTable
          title='Viajantes confirmados'
          bodyTable={confirmedCandidates}
          showOptions={false}
        />

        <ButtonGoBack />
      </Container>
    </MainContainer>
  )
}