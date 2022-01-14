import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';


const MatchScreen = () => {
    const [matchProfiles, setMatchProfiles] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/natany/matches")
            .then((res) => {
                setMatchProfiles(res.data.matches)


            })
            .catch((err) => {
                console.log(err);
            })
        console.log(matchProfiles)
    }

    const listaMatches = matchProfiles.map((match) => {
        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={match.nome} src={match.photo} />
                    </ListItemAvatar>
                    <p key={match.id}>{match.name}</p>
                    
                </ListItem>
            </List>
            
        )
    })
    return (
        <Box sx={{ width: "100%" }}>
            {listaMatches}
        </Box>
    )
}

export default MatchScreen
