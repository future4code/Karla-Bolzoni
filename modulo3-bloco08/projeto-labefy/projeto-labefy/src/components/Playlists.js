import React from "react";
import axios from "axios";
import styled from "styled-components";
import { ContainerPrincipal } from "../App";
import { MeuBotao } from "../App";
import { HeaderContainer } from "./DetalhesPlaylist";
//import DetalhesPlaylist from "./DetalhesPlaylist";


const ItemPlaylist = styled.div`
background-color: yellow ;
width: 40%;
margin: 2px;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 10px;
`

const ItemHeader = styled.p` 
padding: 0 60px;
`
const axiosConfig = {
  headers: {
    Authorization: "karla-natany-joy"
  }
}

//Página que mostra as playlists 

class Playlists extends React.Component {
  state = {
    listaPlaylist: [],
    playlistId: "",
    name: "",
    paginaAtual: "playlists"
  }

  componentDidMount() {
    this.mostraPlaylist()
  }

  //Requisição para pegar as playlists
  mostraPlaylist = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
      .then((res) => {
        this.setState({ listaPlaylist: res.data.result.list })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //Requisição para deletar uma playlist
  deletarPlaylist = (playlistId) => {
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, axiosConfig)
      .then((res) => {
        alert("Playlist removida com sucesso!")
        this.mostraPlaylist()
      })
      .catch((err) => {
        alert("Erro ao remover playlist");
      })
  }

  render() {
    const listaDePlaylist = this.state.listaPlaylist.map((playlist) => {
      return (
        <ItemPlaylist key={playlist.id}>
          <p>{playlist.name}</p>
          <div>
            <MeuBotao onClick={() => this.deletarPlaylist(playlist.id)}>X</MeuBotao>
            <MeuBotao onClick={() => this.props.verDetalhes(playlist)}>Detalhes</MeuBotao>
          </div>
        </ItemPlaylist>
      )
    })

    return (
      <ContainerPrincipal>
        <h1>Minhas Playslists</h1>
        <HeaderContainer>
          <ItemHeader>Playlist</ItemHeader>
          <ItemHeader>Opções</ItemHeader>
        </HeaderContainer>
        {listaDePlaylist}
      </ContainerPrincipal>
    )
  }
}

export default Playlists