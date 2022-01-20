import { Box } from '@chakra-ui/react';
import React from 'react';
import ButtonComponent from './ButtonComponent';
import Titulo from './Titulo';

const CardTrip = (props) => {
    return (
        <div>
            <Box maxW='sm' height={32} borderWidth='1px' borderRadius='lg' overflow='hidden' bg='gray.300'>
                <h2>Destino Viagem</h2>
                <ButtonComponent onClick={props.onClick} textButton="Ver Detalhes"/>

            </Box>
        </div>
    );
};

export default CardTrip;
