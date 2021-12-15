import React from "react"
import axios from "axios"

const axiosConfig = {
  headers: {
    Authorization: "karla-natany-joy"
  }
}
// id: id de cada música
//     name: nome de cada música
//     artist: cantor ou band da música
//     url:
class DetalhesPlaylist extends React.Component {
  state = {
    quantity: 0,
    tracks: [],
    nameInput: "",
    artistInput: "",
    urlInput: ""
  }

  componentDidMount() {
    this.visualizarPlaylist()
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
    this.setState({ nameImput: event.target.value })
  }

  inputNomeArtista = (event) => {
    this.setState({ artistInput: event.target.value })
  }

  inputURL = (event) => {
    this.setState({ urlInput: event.target.value })
  }

  inserirMusica = () => {
   console.log(this.state)
   
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
      this.visualizarPlaylist()
    })
    .catch(err => {
      console.log("erro ao adc musica")
      console.log(err)
    })
  }
  render() {
    const detalhesDaPlaylist = this.state.tracks.map((musica) => {
      return (
        <div key={musica.id}>
          {musica.artist} <br />
          {musica.name}<br />
          {musica.url}<br />
        </div>
      )
    })
    return (
      <div>
        <p> detalhes playlist {this.props.playlist.name}</p>
        <p> Quantidade de músicas: {this.state.quantity}</p>
        {detalhesDaPlaylist}

        <div>
          <input
            placeholder={"Nome da música"}
            value={this.state.name}
            onChange={this.inputNomeMusica}
          />

          <input
            placeholder={"Artista"}
            value={this.state.artist}
            onChange={this.inputNomeArtista}
          />

          <input
            placeholder={"URL"}
            value={this.state.url}
            onChange={this.inputURL}
          />
          <button onClick={this.inserirMusica}>Adicionar Música</button>



        </div>
      </div>
    )
  }
}

export default DetalhesPlaylist