import React from 'react';
import Titulo from '../components/Titulo';
import { useHistory } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent';
import ButtonGoBack from '../components/ButtonGoBack';


const ApplicationFormPage = () => {
  const history = useHistory()


  return <div>
    <Titulo texto="Formulário de aplicação"/>
    <ButtonGoBack/>
    <ButtonComponent textButton='Enviar'/>

  </div>;
};

export default ApplicationFormPage;
