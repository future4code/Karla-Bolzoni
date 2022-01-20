import React from 'react';
import ButtonGoBack from '../components/ButtonGoBack';
import Titulo from '../components/Titulo';
import { useHistory } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';

const LoginPage = () => {
  const history = useHistory()

  const goToAdminHomePage = () => {
    history.push("admin/trips/list")
  }
  return <div>
    <Titulo texto="Página de login"/>
    <ButtonGoBack/>
    <ButtonComponent onClick={goToAdminHomePage} textButton="Entrar"/>
  </div>;
};

export default LoginPage;
