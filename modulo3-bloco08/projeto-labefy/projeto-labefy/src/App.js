import React from "react";
import CriarPlaylist from "./components/CriarPlaylist"
import Playlists from "./components/Playlists"
import DetalhesPlaylist from "./components/DetalhesPlaylist"
import styled from "styled-components";
import axios from "axios";
import PlaylistSpotify from "./components/PlaylistSpotify"

export const ContainerPrincipal = styled.div` 
background-color: gray;
width: 90vh;
display: flex;
flex-direction: column;
align-items: center;
height: 80%;
margin: 50px auto;
border-radius: 5px;
`

export const MeuBotao = styled.button`
    background: #0D0D0D;
    border:none;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 10px;
    margin: 1rem;
    padding: 10px;
    cursor: pointer;

`

const spotify = {
  clientId: 'db1b09c53d6d4bad889b2ebd429ea3a1',
  clientSecret: '801a5b3843b848c18c6b2a63a242a4d9',
}

class App extends React.Component {

  state = {
    paginaAtual: "criarPlaylist",
    playlist: {},
    tokenSpotify: '',
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
    
    return axios.post('https://accounts.spotify.com/api/token', body, axiosConfig)
      .then(res =>
        this.setState({ tokenSpotify: res.access_token })
      )
      .catch(erro => {
        console.log(erro)
      })
  }

  explorar = () => {
    switch (this.state.paginaAtual) {
      case "criarPlaylist":
        return <CriarPlaylist />
      case "detalhesPlaylist":
        return <DetalhesPlaylist playlist={this.state.playlist} />
      case "playlists":
        return <Playlists verDetalhes={this.irParaDetalhesPlaylist} />
      case "listaSpotify":
        return <PlaylistSpotify token={this.state.tokenAxios}/>
      default:
        return <div>Erro, página não encontrada! </div>
    }
  }

  irParaDetalhesPlaylist = (playList) => {
    this.setState({ paginaAtual: "detalhesPlaylist", playlist: playList })
  }

  irParaPlaylists = () => {
    this.setState({ paginaAtual: "playlists" })
  }

  irParaCriarPlaylists = () => {
    this.setState({ paginaAtual: "criarPlaylist" })
  }

  irParaPlaylistSpotify = () => {
    this.setState({ paginaAtual: "listaSpotify" })
  }

  verificaToken = async () => {
    if (!this.state.tokenSpotify) {
      await this.autenticaSpotify()
      // window.location.href = 'http://localhost:8888'
      // redirectToSpotifyAuth(this.state.spotify.clientId)
    }
    this.irParaPlaylistSpotify()
  }

  render() {
    return (
      <ContainerPrincipal>
        <h1>Labefy Premium</h1>
        {this.explorar()}

        <MeuBotao onClick={this.irParaCriarPlaylists}>INICIO</MeuBotao>

        <MeuBotao onClick={this.irParaPlaylists}>MINHAS PLAYLISTS</MeuBotao>

        <button onClick={this.verificaToken}>Área Spotify</button>


      </ContainerPrincipal>
    )
  }
}

export default App