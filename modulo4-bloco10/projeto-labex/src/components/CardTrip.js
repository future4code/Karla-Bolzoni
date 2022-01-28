import { Box } from '@chakra-ui/react';
import React from 'react';


export const CardTrip = (props) => {
    return (
        <div>
            <Box onClick={props.onClick} width={500} maxW='sm'  borderWidth='1px' borderRadius='lg' overflow='hidden' bg='gray.300' m={2} p={5} cursor='pointer'>
                <h2>{props.destino}</h2>
            </Box>
        </div>
    )
}