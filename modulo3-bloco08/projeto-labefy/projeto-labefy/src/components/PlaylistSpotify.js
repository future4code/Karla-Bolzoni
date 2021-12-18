import React from "react";
import axios from "axios";
import { MeuBotao } from "../App";
import { ContainerMusica, HeaderContainer, Link, Titulo } from "./DetalhesPlaylist";
import styled from "styled-components";

const ContainerSpotify = styled.div ` 
display: flex;
flex-direction: column;

`

const spotify = {
  clientId: 'db1b09c53d6d4bad889b2ebd429ea3a1',
  clientSecret: '801a5b3843b848c18c6b2a63a242a4d9',
}



class PlaylistSpotify extends React.Component {
  state = {
    token: '',
    tracks: [],
    inputBuscaSpotify: ""
  }

  componentDidMount = () => {
    this.autenticaSpotify()
  }

  autenticaSpotify = async () => {
    const axiosConfig = {
      headers: {
        'Authorization': 'Basic ' + (new Buffer.from(spotify.clientId + ':' + spotify.clientSecret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    
    const body = new URLSearchParams({
      grant_type: 'client_credentials'
    })
    
    axios.post('https://accounts.spotify.com/api/token', body, axiosConfig)
      .then(res => {
        this.setState({ token: res.data.access_token })
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  pegaInputSpotify = (event) => {
    this.setState({ inputBuscaSpotify: event.target.value })
  }

  pesquisaMusica = () => {
    axios.get(`https://api.spotify.com/v1/search?type=artist,track&q=${this.state.inputBuscaSpotify}`, 
    {
      headers:
      {
        Authorization: `Bearer ${this.state.token}`
      }
    })
    .then(dados => {
      this.setState({tracks: dados.data.tracks.items})
      //this.setState({ tracks: })
     
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const mostraMusica = this.state.tracks.map((musica) => {
      return (
        <ContainerMusica key={musica.id}>
          <Link href={musica.external_urls.spotify} target="_blank" >{musica.name}</Link>
        </ContainerMusica>
      )
    })  
    return (
      <ContainerSpotify>
        <Titulo>Área do spotify</Titulo>

        <input
        placeholder={'buscar por Artista ou música'}
        value={this.state.inputBuscaSpotify}
        onChange={this.pegaInputSpotify}
        />

        <MeuBotao onClick={this.pesquisaMusica}>Pesquisar</MeuBotao>

        <HeaderContainer>
            <p>Nome da música</p>
            <p>Opções</p>
          </HeaderContainer>
        {mostraMusica}


      </ContainerSpotify>
    )
  }
}

export default PlaylistSpotify
