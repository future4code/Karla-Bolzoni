import React from 'react'
import match from '../images/match.png'
import styled from 'styled-components'
import tinder from '../images/tinder.png'
import excluir from '../images/excluir.png'
import heart from '../images/heart.png'

const IconImg = styled.img ` 
width: 30px;
height: 40px;
`
function Icon(props) {
    let img
    switch(props.img){
        case 'match':
            img = match
            break;
        case 'tinder':
            img = tinder
            break;
        case 'excluir':
            img = excluir
            break;
        case 'heart':
            img = heart
            break;
    }   
        
    return (
        <div>
             <IconImg src={img}  />
        </div>
    )
}

export default Icon
