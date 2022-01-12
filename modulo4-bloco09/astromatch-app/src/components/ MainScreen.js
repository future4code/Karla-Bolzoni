import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Options from './Options'

export const MainContainer = styled.div` 
width: 30%;
border: 1px solid black;
height: 80vh;
margin: auto;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: space-between;

`

const Photo = styled.img` 
width: 70%;
height: 50%;
margin-left: 60px;
border-radius: 5px;
box-shadow: 20px 30px 80px;
`
const Descricao = styled.p ` 
text-align: center;

`
const axiosConfig = {
    headers:{
        'content-type': 'application/json'
    }
}

const MainScreen = (props) => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        showProfile()
    }, [])

    const showProfile = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natany/person")
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const choosePerson = (idPerson) => {

        const data = {
            id: idPerson,
            choice: true
        }
        axios
        .post (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natany/choose-person`, data, axiosConfig )
        .then((res) => {
            alert("tudo certo")
            showProfile()
        })
        .catch((err) => { 
            console.log("erro")
        })

    }

    return (
        <MainContainer>
            <Header irParaMatchs={props.irParaMatchs}/>
            <hr />

            <h1>{profile.name}</h1>
            <Photo src={profile.photo} />
            <Descricao>{profile.bio}</Descricao>


            <Options 
            recusar={showProfile}
            accept={() =>choosePerson(profile.id)} 
            />


        </MainContainer>
    )
}

export default MainScreen
