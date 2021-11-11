import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
  return (
    <div className="small-container">
      <div className="info-small-container">
      <img className="icone" src={ props.imagem}/>
      <p className="bold">{props.texto}</p>
      <p>{props.email}</p>
      </div>

    </div>
  )
}

export default CardPequeno;