import React from 'react';
import { BoxButton, ButtonComponent, ButtonGoBack, ContainerForm, MainContainer, Titulo } from '../components';
import { Input, Select } from '@chakra-ui/react';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../helpers/constants';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    auth: localStorage.getItem("token")
  }
}
export const CreateTripPage = () => {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  })

  const planetsList = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"]

  const creatTrip = (event) => {
    event.preventDefault()

    axios
      .post(`${BASE_URL}/trips`, form, axiosConfig)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }
  
  return (
    <MainContainer>
      <Titulo texto="Criar uma nova viagem" />
      <ContainerForm>
        <form onSubmit={creatTrip}>
          <Input
            name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder='Nome'
            m='3'
            required
            pattern={"^.{5,}"}
            title={"O nome da viagem deve ter no mínimo 5 letras"}
          />
          <Select m='3' onChange={onChange} name="planet">
            <option value="">Escolha o destino</option>
            {planetsList.map((planetItem) => {
              return (
                <option key={planetItem} value={planetItem} required> {planetItem} </option>
              )
            })}
          </Select>

          <Input
            name={"date"}
            value={form.date}
            onChange={onChange}
            placeholder='Data'
            m='3'
            required
            type={"date"}
          />
          <Input
            name={"description"}
            value={form.description}
            onChange={onChange}
            placeholder='Descrição'
            m='3'
            required

          />
          <Input
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            placeholder='Duração em dias'
            m='3'
            required
            type={"number"}
          />
            <ButtonComponent textButton="Criar" />
          
        </form>
      </ContainerForm>

      <BoxButton>
            <ButtonGoBack />
          </BoxButton>
    </MainContainer>
  )
}
