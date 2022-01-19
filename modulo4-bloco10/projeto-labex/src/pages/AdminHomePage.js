import React from 'react';
import Header from '../components/Header';
import { Box } from '@chakra-ui/react'

const AdminHomePage = () => {
  return (
    <Box bg='gray.100' maxW='3xl'>
      There are many benefits to a joint design and development system. Not only
      does it bring benefits to the design team.

      <Header />
      <p>Página para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
    </Box>
  )
};

export default AdminHomePage;
