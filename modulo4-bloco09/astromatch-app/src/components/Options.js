import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
import styled from 'styled-components'

const ContainerOptions = styled.div` 
display: flex;
justify-content: space-around;
`
export const ImagemBotao = styled.div` 
cursor: pointer;
width: 10%;
text-align: center;
padding: 5px;
border-radius: 50px;
border: ${props => props.succes ? '1px solid green' : '1px solid red'};
`

function Options(props) {
    return (
        <ContainerOptions>
            <ImagemBotao onClick={props.recusar}>
                <ClearIcon sx={{ color: 'red' }}/>
            </ImagemBotao>

            <ImagemBotao succes onClick={props.accept}>
              <FavoriteIcon sx={{ color: 'green' }}/>
            </ImagemBotao>
        </ContainerOptions> 
    )
}

export default Options
