import React from "react";
import axios from "axios";
import styled from "styled-components"


const ContainerPrincipal = styled.div` 
display: flex;
background-color: #517EA6 ;
height: 400px;
flex-direction: column;
width: 50%;
justify-content: space-around;
margin: 50px auto;
align-items: center;
border-radius: 20px;
color: white;

`

const ComponenteUsuario = styled.div` 
display: flex;
justify-content: space-around;
height: 50px;
width: 50%;
background-color: #6FA0BF;
align-items: center;
border-radius: 10px;

`

export default class App extends React.Component {
  state = {
    listaUsuarios: [],
    nameInput: "",
    emailInput: "",
    mostraLista: false
  }

  componentDidMount() {
    this.mostraListaUsuarios();
  }

  mudaTela = () => {
    this.setState({ mostraLista: !this.state.mostraLista })
  }

  //PEGANDO A LISTA DE USUÁRIOS
  mostraListaUsuarios = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
        headers: {
          Authorization: "karla-natany-joy"
        }
      })
      .then((res) => {
        this.setState({ listaUsuarios: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //PEGANDO OS VALORES DO INPUT - CADASTRO USUÁRIO
  changeName = (e) => {
    this.setState({ nameInput: e.target.value })
  }

  changeEmail = (e) => {
    this.setState({ emailInput: e.target.value })
    console.log(e.target.value)
  }
  //FUNÇÃO CADASTRA USUÁRIO
  cadastraUsuario = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    }
    const headers = {
      headers: {
        Authorization: "karla-natany-joy"
      }
    };

    axios.post(URL, body, headers)
      .then((res) => {
        alert(`Sucesso, usuário cadastrado`)
        this.mostraListaUsuarios()
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
  //FUNÇÃO DELETA USUÁRIO
  deletaUsuario = (usuario) => {

    const texto = "operação cancelada"
    const confirmacao = window.confirm(`Você tem certeza que deseja deletar o usuário ${usuario.name}? `)
    if (confirmacao === true) {
      const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`
      const headers = {
        headers: {
          Authorization: "karla-natany-joy"
        }
      }
      axios.delete(URL, headers)
        .then((res) => {
          alert(`sucesso usuário ${usuario.name} removido`)
          this.mostraListaUsuarios()
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    } else {
      return alert(texto)
    }
  }

  //FUNÇÃO DETALHES DO USUÁRIO - falta implementar
  detalhesUsuario = (usuario) => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`, {
        headers: {
          Authorization: "karla-natany-joy"
        }
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  render() {

    if (this.state.mostraLista) {
      const list = this.state.listaUsuarios.map((usuario) => {
        return (

          <ComponenteUsuario key={usuario.id}>
            <p >{usuario.name}</p>
            <button onClick={() => this.deletaUsuario(usuario)}>Deletar</button>
            {/* <button onClick={() => this.detalhesUsuario(usuario)}>Detalhes</button> */}
            {/* <button onClick={() => this.editaUsuario(usuario)}>Editar</button> */}

          </ComponenteUsuario>
        )
      })

      return (
        <div>
          <ContainerPrincipal>
            <p>Lista de usuários:</p>
            {list}
            <button onClick={this.mudaTela}>Voltar para cadastro </button>
          </ContainerPrincipal>
        </div>
      )

    } else {
      return (
        <ContainerPrincipal>
          <div>
            <p> Cadastro de usuários: </p>
            <input
              placeholder={"nome"}
              value={this.state.nameInput}
              onChange={this.changeName}
            />
          </div>

          <div>
            <input
              placeholder={"email"}
              value={this.state.emailInput}
              onChange={this.changeEmail}
            />
          </div>

          <button onClick={this.cadastraUsuario}>Cadastrar Usuário</button>

          <button onClick={this.mudaTela}>Ir para lista de usuários </button>
        </ContainerPrincipal>
      )
    }


  }
}
