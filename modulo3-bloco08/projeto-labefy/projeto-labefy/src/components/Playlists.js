import React from "react";
import axios from "axios";
import styled from "styled-components";
import { ContainerPrincipal } from "../App";
//import DetalhesPlaylist from "./DetalhesPlaylist";

const ItemPlaylist = styled.div`
border: 1px solid black;
width: 500px;
margin: 10px;
border-radius: 5px;
padding: 10px;
display: flex;
justify-content: space-between;
`
const axiosConfig = {
  headers: {
    Authorization: "karla-natany-joy"
  }
}

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
          {playlist.name}
          <button onClick={() => this.deletarPlaylist(playlist.id)}>Apagar</button>
          <button onClick={() => this.props.verDetalhes(playlist)}>Detalhes</button>
        </ItemPlaylist>
      )
    })

    return (
      <ContainerPrincipal>
        {listaDePlaylist}
      </ContainerPrincipal>
    )
  }
}

export default Playlists