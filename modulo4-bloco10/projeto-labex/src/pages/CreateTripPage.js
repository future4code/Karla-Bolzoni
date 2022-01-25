import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import ButtonGoBack from '../components/ButtonGoBack';
import Titulo from '../components/Titulo';

export const CreateTripPage = () => {
  return <div>
    <Titulo texto="Criar uma nova viagem"/>
    <ButtonComponent textButton="Criar"/>
    <ButtonGoBack/>
  </div>;
};

