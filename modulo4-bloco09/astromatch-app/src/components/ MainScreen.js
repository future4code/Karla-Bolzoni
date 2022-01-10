import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Options from './Options'

const MainContainer = styled.div` 
width: 30%;
border: 1px solid black;
height: 80vh;
margin: auto;
margin-top: 50px;
`

const Photo = styled.img` 
width: 80%;
height: 60%;
`

const axiosConfig = {
    headers:{
        'content-type': 'application/json'
    }
}

const MainScreen = () => {
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
            <Header />
            <hr />
            <p>{profile.name}</p>
            <Photo src={profile.photo} />
            <p>{profile.bio}</p>


            <Options recusar={showProfile}
            accept={() =>choosePerson(profile.id)} />


        </MainContainer>
    )
}

export default MainScreen
