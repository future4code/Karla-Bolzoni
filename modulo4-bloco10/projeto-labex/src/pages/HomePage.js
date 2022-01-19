import React from 'react';
import { Box, Center, Stack } from '@chakra-ui/react';
import Titulo from '../components/Titulo';
import ButtonComponent from '../components/ButtonComponent'


export const HomePage = (props) => {
  return (
  <Box w="50%" h="40vh" display="flex" alignItems="center" justifyContent="space-around" flexDirection="column">
    <Center>
      <Titulo texto='LabeX'/>
    </Center>
    <Stack spacing={4} direction='row' align='center'>
      <ButtonComponent textButton='Conferir Viagens'/>
      <ButtonComponent textButton='Fazer login'/>
    </Stack>

  </Box>
  );
};
