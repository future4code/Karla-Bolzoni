import React from "react";
import axios from "axios";
import { MeuBotao } from "../App";
import { ContainerMusica, Link, Titulo } from "./DetalhesPlaylist";
//import styled from "styled-components";


class PlaylistSpotify extends React.Component {
  state = {
    token: this.props.token,
    tracks: []
  }

  topTracksLorde = () => {
    axios.get("https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR",
      {
        headers:
        {
          Authorization: `Bearer ${this.state.token}`
        }
      })
      .then(dados => {
        console.log(dados.data.tracks[0])
        this.setState({ tracks: dados.data.tracks })
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
      <div><Titulo>MINHA BUSCA DO SPOTIFY</Titulo>
        {mostraMusica}
        <MeuBotao onClick={this.topTracksLorde}>Buscar top tracks da Lorde</MeuBotao>
      </div>
    )
  }
}

export default PlaylistSpotify
