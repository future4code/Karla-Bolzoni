import React, { useState } from 'react'
//import axios from 'axios'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const MatchScreen = (props) => {
    // const [matchProfiles, setMatchProfiles] = useState([])


    // const getMatches = () => { 
    //     axios
    //     .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natany/matches")
    //     .then((res) => {
    //         // setMatchProfiles()
    //         console.log(res)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })

    // }
    return (
    //     <React.Fragment>
    //     <CssBaseline />
    //     <Container fixed>
    //       <Box sx={{ border:1, height: '80vh', width: '40%', margin: 'auto' }} />
    //     </Container>
    //   </React.Fragment>
<div>
            <p>tela de matches</p>
            <button onClick={props.irParaHome}>VOLTAR HOME</button>
            <Button variant="contained"> Olá Mundo</Button>;
            </div>
    )
}

export default MatchScreen
