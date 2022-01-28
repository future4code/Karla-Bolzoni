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
  CardCandidate,
  MainContainer,
} from '../components'
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

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
    });
    setTrip(data.trip);
  };
  
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
    return (
      <>
        <CardCandidate
          key={candidate.id}
          name={candidate.name}
          profession={candidate.profession}
          age={candidate.age}
          country={candidate.country}
          applicationText={candidate.applicationText}
          decideCandidate={decideCandidate}
          candidateId={candidate.id}
          tripId={trip.id}
        />
      </>
    )
  })

  if (!trip) return <Loader />
  return (
    <MainContainer>
      <Titulo texto="Detalhes da viagem" />
      <CardTrips
        nameTrip={trip.name}
        planet={trip.planet}
        date={trip.date}
        description={trip.description}
        durationInDays={trip.durationInDays}
      />

      <Titulo texto={"Candidatos Pendentes"} />
      <Table maxW='md' variant='striped' colorScheme='purple'>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Profissão</Th>
            <Th>Idade</Th>
            <Th>País</Th>
            <Th>Texto</Th>
            <Th>Opções</Th>
          </Tr>
        </Thead>
        <Tbody>
          {candidatesPedents}
        </Tbody>
      </Table>

      <Titulo texto="Candidatos Aprovados" />

      <ButtonGoBack />
    </MainContainer>
  )
}