import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerCriarPlaylist = styled.div` 
height: 100px;
display: flex;
flex-direction: column;
width: 50%;
margin: auto;
justify-content: space-around;
align-items: center;

`

class CriarPlaylist extends React.Component {
    //declarar state
    state = {
        nome: ""
    }

    inputNomePlaylist = e => {
        const nomeNovaPlaylist = e.target.value
        this.setState({ nome: nomeNovaPlaylist })
    }

    criaPlaylist = () => {
        const axiosConfig = {
            headers: {
                Authorization: "karla-natany-joy"
            }
        }
        const body = {
            name: this.state.nome
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, axiosConfig)
            .then((res) => {
                alert(`playlist "${this.state.nome}" criada com sucesso`)
                this.setState({ nome: "" })

            })
            .catch(error => {
                alert("Já existe uma playlist com este nome, escolha outro")
                this.setState({ nome: "" })
            })
    }

    render() {
        return (
            <ContainerCriarPlaylist>
                <input
                    placeholder="Nome da nova Playlist"
                    type="text"
                    value={this.state.nome}
                    onChange={this.inputNomePlaylist}
                />
                <button onClick={this.criaPlaylist}>CRIAR PLAYLIST</button>
            </ContainerCriarPlaylist>
        )
    }
}

export default CriarPlaylist