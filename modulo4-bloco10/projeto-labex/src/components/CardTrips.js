import React from 'react';
import styled from 'styled-components';
import { ButtonComponent, Subtitle } from '.';

export const CardItem = styled.div`
background-color: #191718b8;
width: 300px;
height: 300px;
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 5px;
color: white;
-webkit-box-shadow: 2px 1px 9px 0px rgba(50, 50, 50, 0.78);
-moz-box-shadow:    2px 1px 9px 0px rgba(50, 50, 50, 0.78);
box-shadow:         2px 1px 9px 0px rgba(50, 50, 50, 0.78);
border-radius: 5px;
color: white;
`
export const CardTrips = (props) => {
    return (
        <CardItem>
         <Subtitle>{props.nameTrip}</Subtitle>
          <p>DESTINO: {props.planet}</p>
          <p>DATA: {props.date}</p>
          <p>DESCRIÇÃO: {props.description}</p>
          <p>DURAÇÃO: {props.durationInDays} dias</p>
          {/* <p>id:{props.id}</p> */}
        {/* <ButtonComponent onClick={props.goToApplicationTrip} textButton='Quero me inscrever' /> */}

          </CardItem>
    )
  }
