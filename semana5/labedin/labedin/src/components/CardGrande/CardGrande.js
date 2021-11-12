import React from 'react';
import styled from 'styled-components'

const ContainerGrande = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImagemPerfil = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;

`

const TituloPerfil = styled.h4 ` 
    margin-bottom: 15px;
`

const ContainerInfoPerfil = styled.div ` 
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`

function CardGrande(props) {
    return (
        <ContainerGrande>
            <ImagemPerfil src={props.imagem} />
            <ContainerInfoPerfil>
                <TituloPerfil>{props.nome}</TituloPerfil>
                <p>{props.descricao}</p>
            </ContainerInfoPerfil>
        </ContainerGrande>
    )
}

export default CardGrande;