import React from "react";
import CriarPlaylist from "./components/CriarPlaylist"
import Playlists from "./components/Playlists"
import DetalhesPlaylist from "./components/DetalhesPlaylist"
import styled from "styled-components";
import axios from "axios";
import PlaylistSpotify from "./components/PlaylistSpotify"
import Menu from "./components/Menu";

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
    border-radius: 1px;
    color: #FDFDFD;
    font-size: 15px;
    margin: 20px 2px;
    padding: 10px;
    cursor: pointer;
    &:hover {
    background-color: #76777B;
  }

`

class App extends React.Component {

  state = {
    paginaAtual: "criarPlaylist",
    playlist: {},
  }

  rotaPaginas = () => {
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

  render() {
    return (
      <ContainerPrincipal>
        <Menu
        paginaCriarPlaylist = {this.irParaCriarPlaylists}
        paginaListaPlaylist = {this.irParaPlaylists}
        paginaSpotify = {this.irParaPlaylistSpotify}
        />
        {this.rotaPaginas()}

      </ContainerPrincipal>
    )
  }
}

export default App