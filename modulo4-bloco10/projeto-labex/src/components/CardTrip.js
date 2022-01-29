import { DeleteIcon, ViewIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';


export const CardTripAdmin = (props) => {
    return (
        <div>
            <Box onClick={props.onClick} 
            width={500} 
            maxW='sm'  
            borderWidth='1px' 
            borderRadius='lg' 
            overflow='hidden' 
            bg='#191718b8' 
            m={2} 
            p={5} 
            cursor='pointer'
            color='white'>
                <h2>{props.destino}</h2>
                <ViewIcon/>
                <DeleteIcon/>
            </Box>
        </div>
    )
}