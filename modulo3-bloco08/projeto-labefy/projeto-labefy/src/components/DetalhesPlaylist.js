import React from "react"
import axios from "axios"
import styled from "styled-components"
import { MeuBotao } from "../App"

export const ContainerMusica = styled.div` 
background-color: #D9AD5B;
margin: 2px;
color: #222126;
display: flex;
justify-content: space-between;
font-size: small;
align-items: center;
padding: 0 14px;
`
export const HeaderContainer = styled(ContainerMusica)`
background-color: black;
color: #D9AD5B;
`
export const Link = styled.a` 
color: #222126;`

export const Titulo = styled.h1`
border-bottom: solid 5px black;
display: inline;

`

const ContainerAdicionarMusica = styled.div` 
display:flex;
height: 100px;
align-items: center;
flex-wrap: wrap;

`

const Input = styled.input` 
margin: 5px;
border-radius: 3px;
border: none;
height: 20px;
`

const axiosConfig = {
  headers: {
    Authorization: "karla-natany-joy"
  }
}

class DetalhesPlaylist extends React.Component {
  state = {
    quantity: 0,
    tracks: [],
    trackId: "",
    nameInput: "",
    artistInput: "",
    urlInput: ""
  }

  componentDidMount() {
    this.visualizarPlaylist()
    console.log(this.props.playlist)

  }

  visualizarPlaylist = () => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks`, axiosConfig)
      .then((res) => {
        this.setState({ tracks: res.data.result.tracks, quantity: res.data.result.quantity })
      })
      .catch((err) => {
        console.log(err.response);
      })
  }
  //ADICIONANDO UMA NOVA MÚSICA

  inputNomeMusica = (event) => {
    this.setState({ nameInput: event.target.value })
  }

  inputNomeArtista = (event) => {
    this.setState({ artistInput: event.target.value })
  }

  inputURL = (event) => {
    this.setState({ urlInput: event.target.value })
  }

  inserirMusica = () => {

    const body = {
      name: this.state.nameInput,
      artist: this.state.artistInput,
      url: this.state.urlInput
    }

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks`,
        body,
        axiosConfig,

      )
      .then((res) => {
        console.log(res)
        this.setState({ nameInput: "", artistInput: "", urlInput: "" })

        this.visualizarPlaylist()
      })
      .catch(err => {
        console.log("erro ao adc musica")
        console.log(err)
      })
  }

  removerMusica = (trackId) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks/${trackId}`,
      axiosConfig,
    )
      .then((res) => {
        console.log('musica apagada')
        this.visualizarPlaylist()
      })
      .catch(err => {
        console.log('erro ao apagar musica')
        console.log(err)
      })

  }
  render() {
    const detalhesDaPlaylist = this.state.tracks.map((musica) => {
      return (
        <ContainerMusica key={musica.id}>
          <p>{musica.artist}</p>
          <Link href={musica.url} target="_blank" >{musica.name}</Link>
          <MeuBotao onClick={() => this.removerMusica(musica.id)}>X</MeuBotao>
        </ContainerMusica>


      )
    })
    return (
      <div>
        <Titulo>{this.props.playlist.name}</Titulo>
        <p> Quantidade de músicas: {this.state.quantity}</p>

        <HeaderContainer>
          <p>Artista</p>
          <p>Música</p>
        </HeaderContainer>
        {detalhesDaPlaylist}

        <ContainerAdicionarMusica>
          <Input
            placeholder={"Nome da música"}
            value={this.state.name}
            onChange={this.inputNomeMusica}
          />

          <Input
            placeholder={"Artista"}
            value={this.state.artist}
            onChange={this.inputNomeArtista}
          />

          <Input
            placeholder={"URL"}
            value={this.state.url}
            onChange={this.inputURL}
          />
          <MeuBotao onClick={this.inserirMusica}>Adicionar Música</MeuBotao>

          <audio autoplay="autoplay" controls="controls">
            <source src="https://soundcloud.com/ouvir-musica-online/14-faz-brilhar-brilha-jesus-ao?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" type="audio/mp3" />
            seu navegador não suporta HTML5
          </audio>


        </ContainerAdicionarMusica>
      </div>
    )
  }
}

export default DetalhesPlaylist