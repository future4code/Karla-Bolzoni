import React from 'react';
import { Box, Center, Stack } from '@chakra-ui/react';
import Titulo from '../components/Titulo';
import ButtonComponent from '../components/ButtonComponent'
import { useHistory } from "react-router-dom";


export const HomePage = (props) => {
  const history = useHistory()

  const goToListTrips = () => history.push("/trips/list")

  const goToLogin = () => history.push("/login")

  return (
    <Box w="50%" h="40vh" display="flex" alignItems="center" justifyContent="space-around" flexDirection="column">
      <Center>
        <Titulo texto='LabeX' />
      </Center>
      <Stack spacing={4} direction='row' align='center'>
        <ButtonComponent 
          onClick={goToListTrips} 
          textButton='Conferir Viagens' 
        />
        <ButtonComponent 
          onClick={goToLogin}
          textButton='Fazer login' 
        />
      </Stack>
    </Box>
  )
}
