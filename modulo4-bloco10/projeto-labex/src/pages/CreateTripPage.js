import React from 'react';
import {ButtonComponent, ButtonGoBack, Titulo} from '../components';

export const CreateTripPage = () => {
  return <div>
    <Titulo texto="Criar uma nova viagem"/>
    <ButtonComponent textButton="Criar"/>
    <ButtonGoBack/>
  </div>;
};

