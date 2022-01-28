import React from 'react';
import styled from 'styled-components';


const CardItem = styled.div`
background-color: black;
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
`

export const CardTrips = (props) => {
    return (
        <CardItem>
            <p><strong>{props.nameTrip}</strong></p>
            <p>Qual nosso destino: {props.planet}</p>
            <p>Save the date: {props.date}</p>
            <p>Sabendo mais: {props.description}</p>
            <p>Por quanto tempo: {props.durationInDays} dias</p>
            <p>id:{props.id}</p>

        </CardItem>
    );
};

