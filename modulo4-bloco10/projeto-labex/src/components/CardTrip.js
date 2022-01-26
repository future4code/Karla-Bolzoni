import { Box } from '@chakra-ui/react';
import React from 'react';


export const CardTrip = (props) => {
    return (
        <div>
            <Box onClick={props.onClick} maxW='sm' height={32} borderWidth='1px' borderRadius='lg' overflow='hidden' bg='gray.300'>
                <h2>{props.destino}</h2>
            </Box>
        </div>
    )
}