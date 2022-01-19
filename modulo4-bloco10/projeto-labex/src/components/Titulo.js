import React from 'react';
import { Text } from '@chakra-ui/react';

const Titulo = (props) => {
  return ( 
    <div>
        <Text letterSpacing= '-2%' fontSize='50px' color='tomato' fontWeight= 'bold' center> {props.texto}</Text>
    </div>
    );
};

export default Titulo;
