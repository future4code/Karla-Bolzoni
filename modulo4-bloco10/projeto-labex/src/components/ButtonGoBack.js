import React from 'react';
import { useHistory } from "react-router-dom";
import ButtonComponent from './ButtonComponent';

const ButtonGoBack = () => {
    const history = useHistory()


    const goBack = () => {
        history.goBack()
    }
  return <div>
      <ButtonComponent onClick={goBack} textButton='Voltar'/>
  </div>;
};

export default ButtonGoBack;
