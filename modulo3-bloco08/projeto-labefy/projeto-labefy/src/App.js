import React from "react";
import CriarPlaylist from "./components/CriarPlaylist"
import Playlists from "./components/Playlists"
import DetalhesPlaylist from "./components/DetalhesPlaylist"
import styled from "styled-components";


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


class App extends React.Component {

  state = {
    paginaAtual: "criarPlaylist",
    playlist: {}
  }

  explorar = () => {

    switch (this.state.paginaAtual) {
      case "criarPlaylist":
        return <CriarPlaylist />
      case "detalhesPlaylist":
        return <DetalhesPlaylist playlist={this.state.playlist} />
      case "playlists":
        return <Playlists verDetalhes={this.irParaDetalhesPlaylist} />
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

  render() {
    return (
      <ContainerPrincipal>
        <h1>Labefy Premium</h1>
        {this.explorar()}

        <MeuBotao onClick={this.irParaCriarPlaylists}>INICIO</MeuBotao>

        <MeuBotao onClick={this.irParaPlaylists}>MINHAS PLAYLISTS</MeuBotao>


      </ContainerPrincipal>
    )
  }
}

export default App