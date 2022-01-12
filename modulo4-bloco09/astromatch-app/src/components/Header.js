import React from 'react'
import logoAstroMatch from '../images/logo-astromatch.png'
import styled from 'styled-components'
import Icon from './Icon'
import { ImagemBotao } from './Options'

const LogoText = styled.img ` 
width: 40%;
height: 70px;
`
const ContainerHeader = styled.div ` 
display: flex;
justify-content: space-between;
align-items: center;
`
const Header = (props) => {
    return (
        <ContainerHeader>
            <LogoText src={logoAstroMatch} />
            <ImagemBotao onClick={props.irParaMatchs}>
                <Icon img='tinder'/>
            </ImagemBotao>
            
        </ContainerHeader>
    )
}

export default Header
