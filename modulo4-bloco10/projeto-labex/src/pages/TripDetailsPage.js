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
} from '../components'


export const TripDetailsPage = () => {
  const [trip, setTrip] = useState({})
  const { id } = useParams()

  useProtectedPage()

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`${BASE_URL}/trip/${id}`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      });
      setTrip(data.trip);      
    };
    fetch();
  }, [])

  const candidatesPedents = trip.candidates && trip.candidates.map((candidate) => {
    return (
      <>
        <CardCandidate
          key={candidate.id}
          name={candidate.name}
          profession={candidate.profession}
          age={candidate.age}
          country={candidate.country}
        />
      </>
    )
  })



  if(!trip) return <Loader />
  return (
    <div>
      <Titulo texto="Detalhes da viagem" />
      <CardTrips
        nameTrip={trip.name}
        planet={trip.planet}
        date={trip.date}
        description={trip.description}
        durationInDays={trip.durationInDays}
      />

      <Titulo texto={"Candidatos Pendentes"} />
      {candidatesPedents}
      <h3>Candidatos Aprovados</h3>

      <ButtonGoBack />
    </div>
  )
}