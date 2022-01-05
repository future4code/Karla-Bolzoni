import React from "react";
import styled from "styled-components";
import { MeuBotao } from "../App";


const BarraMenu = styled.div` 
display: flex;
background-color: yellow;
justify-content: space-between;
width: 100%;
`

const BarraBotoes = styled.div ` 
display: flex;
align-items: end;
`

class Menu extends React.Component {

    render() {

        return (
            <BarraMenu>
                <h1>Labefy Premium</h1>
                {/* this.explorar()} */}
                <BarraBotoes>
                    <MeuBotao onClick={this.props.paginaCriarPlaylist}>Home</MeuBotao>
                    <MeuBotao onClick={this.props.paginaListaPlaylist}>Playlists</MeuBotao>
                    <MeuBotao onClick={this.props.paginaSpotify}>Área Spotify</MeuBotao>
                </BarraBotoes>

            </BarraMenu>
        )
    }
}

export default Menu