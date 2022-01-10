import React from 'react'
import Icon from './Icon'
import styled from 'styled-components'

const ContainerOptions = styled.div` 
display: flex;
justify-content: space-around;
`

const ImagemBotao = styled.div` 
cursor: pointer;
width: 10%;

`
function Options(props) {
    return (
        <ContainerOptions>
            <ImagemBotao onClick={props.recusar}>
                <Icon img={'excluir'} />
            </ImagemBotao>

            <ImagemBotao onClick={props.accept}>
                <Icon img={'heart'} />
            </ImagemBotao>
        </ContainerOptions>
    )
}

export default Options
