import React from 'react'
import styled from 'styled-components'

const IconeImage = styled.img ` 
opacity: 80%;
width: 30px;
transition: .5s;
cursor: pointer;
&:hover {
    opacity: 100%;
  }
`

export function IconeRedeSocial (props) { 
  return( 
  <div>
    <IconeImage 
    alt={'icone'}
    src={props.iconeRedeSocial}
    onClick={props.onClickIconeRedeSocial}
    />
    {/* <p>{props.nome}</p> */}

  </div>
  )
}

export default IconeRedeSocial