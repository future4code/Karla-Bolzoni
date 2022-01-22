import React from 'react';
import { useHistory } from "react-router-dom";
import ButtonComponent from './ButtonComponent';

const ButtonGoBack = () => {
    const history = useHistory()

    const goBack = () => history.goBack()
    
    return <ButtonComponent onClick={goBack} textButton='Voltar'/>
}

export default ButtonGoBack;
