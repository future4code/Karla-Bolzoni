import React from 'react';
import { Text } from '@chakra-ui/react';

export const Titulo = (props) => {
  return ( 
    <div>
        <Text letterSpacing= '-2%' fontSize='50px' color='tomato' fontWeight= 'bold' textAlign='center'> 
          {props.texto}
        </Text>
    </div>
    );
};
