import React from 'react';
import { Box } from '@chakra-ui/react'
import styled from 'styled-components';

const Logo = styled.p ` 
font-family: 'Amatic SC', cursive;
font-size: 60px;
/* font-family: 'Comfortaa', cursive; */
`
export const Header = () => {
    return ( 
        <Box bg='tomato'  width="100%" textAlign='center' color='white'>
            <Logo>LabeX</Logo>        
        </Box>
    )
};

