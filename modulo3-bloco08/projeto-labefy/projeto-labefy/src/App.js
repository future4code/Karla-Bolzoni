import React from "react";
import CriarPlaylist from "./components/CriarPlaylist"
import Playlists from "./components/Playlists"
import DetalhesPlaylist from "./components/DetalhesPlaylist"
import styled from "styled-components";


export const ContainerPrincipal = styled.div` 
background-color: gray;
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify: 
height: 100vh;
margin: 100px auto;
border-radius: 5px;

`

const BotaoMenu = styled.div`
margin: 10px;

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
        return <DetalhesPlaylist playlist={this.state.playlist}/>
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

  render() {
    return (
      <ContainerPrincipal>
<h1>Labefy Premium</h1>
        {this.explorar()}

        <BotaoMenu>
          <button onClick={this.irParaDetalhesPlaylist}>DETALHES PLAYLIST</button>

        </BotaoMenu>
        <BotaoMenu>
          <button onClick={this.irParaPlaylists}>MINHAS PLAYLISTS</button>
        </BotaoMenu>

      </ContainerPrincipal>
    )
  }
}

export default App