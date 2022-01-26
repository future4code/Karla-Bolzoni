import React from 'react';
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';

const ContainerLoader = styled.div` 
width: 300px;
height: 300px;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
`
export const Loader = () => {
  return <ContainerLoader>

    <Button isLoading colorScheme='teal' variant='solid'></Button>
  </ContainerLoader>;
};

