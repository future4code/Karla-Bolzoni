import React from 'react'
import logoAstroMatch from '../images/logo-astromatch.png'
import styled from 'styled-components'
import { ImagemBotao } from './Options'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import HomeIcon from '@mui/icons-material/Home';



const LogoText = styled.img ` 
width: 40%;
height: 70px;
`
const ContainerHeader = styled.div ` 
display: flex;
justify-content: space-between;
align-items: center;
`

const IconHeader = styled.div ` 
`
const Header = (props) => {
    return (
        <ContainerHeader>
            <LogoText src={logoAstroMatch} />
            <div onClick={() => props.changePage('telaAtual')}>
             { props.telaAtual === 'home' ? <LocalFireDepartmentIcon color="secondaryDark" /> : <HomeIcon color="secondary" />}
            </div>
            
        </ContainerHeader>
    )
}

export default Header
