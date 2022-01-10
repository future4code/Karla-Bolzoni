import React from 'react'
import logoAstroMatch from '../images/logo-astromatch.png'
import styled from 'styled-components'
import Icon from './Icon'

const LogoText = styled.img ` 
width: 40%;
height: 70px;
`
const ContainerHeader = styled.div ` 
display: flex;
justify-content: space-between;
align-items: center;
`
const Header = () => {
    return (
        <ContainerHeader>
            <LogoText src={logoAstroMatch} />
            <Icon img='tinder'/>
        </ContainerHeader>
    )
}

export default Header
