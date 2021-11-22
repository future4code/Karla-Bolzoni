import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovoPost = styled.div` 
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100px;
margin-bottom: 5px;

`


class App extends React.Component {

  state = {

    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50?a=1",
        fotoPost: "https://picsum.photos/200/150?a=9",
      },
      {
        nomeUsuario: "Lucia",
        fotoUsuario: "https://picsum.photos/50/50?a=4",
        fotoPost: "https://picsum.photos/200/150?a=10",
      },
      {
        nomeUsuario: "Ana",
        fotoUsuario: "https://picsum.photos/50/50?a=6",
        fotoPost: "https://picsum.photos/200/150?a=4",
      }
    ],

    valorInputNome: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: "",

  };

  adicionaPost = () => { 
    const copiaPublicacao = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost
    };

    const novaPublicacao = [copiaPublicacao, ...this.state.posts]

    this.setState({posts:  novaPublicacao, novaPublicacao: " "})
  }
  
  onChangeInputNomeAtual = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputFotoUsuarioAtual = (event) => {
    this.setState({valorInputFotoPerfil: event.target.value})
  }

  onChangeInputFotoPostAtual = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  render() {

    const listaDeComponentes = this.state.posts.map((publicacao,index) => {

      return (
        <Post key={"post" + index}
          nomeUsuario={publicacao.nomeUsuario}
          fotoUsuario={publicacao.fotoUsuario}
          fotoPost={publicacao.fotoPost}
        />
      )
    })
    return (
      <MainContainer>

        <NovoPost>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNomeAtual}
            placeholder={"Nome Usuário"}
          />

          <input
            value={this.state.valorInputFotoPerfil}
            onChange={this.onChangeInputFotoUsuarioAtual}
            placeholder={"Foto usuário"}
          />

          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPostAtual}
            placeholder={"Foto Post"}
          />

          <button onClick={this.adicionaPost}>Publicar</button>
        </NovoPost>


        {listaDeComponentes}
      </MainContainer>
    );
  }
}

export default App;
