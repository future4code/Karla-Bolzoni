import React from 'react'
import styled from 'styled-components'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
  
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  display: flex;
  justify-content: space-between;
  width: 100%;

`

const InputsContainer = styled.div`
  display: flex;
  grid-auto-flow: column;
  gap: 10px;

`

const ContainerPrincipal = styled.div` 
width: 80%;
margin: auto;
display: flex;
flex-direction: column;

`

const Input = styled.input` 
margin: 10px;

`

const Button = styled.button` 
height: 25px;
margin-top: 8px;`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidMount() {
    this.pegarLista()

    const textoLs = localStorage.getItem("tarefa") || ""

    this.setState({ inputValue: textoLs })

  };


  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      localStorage.setItem("tarefa", this.state.inputValue)
    }

  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })

  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    }

    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]


    //salvando no local storage
    localStorage.setItem("historicoTarefas", JSON.stringify(novaListaDeTarefas))

    this.setState({ tarefas: novaListaDeTarefas })

    // this.limpar()


  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,

          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({ tarefas: novaListaDeTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })

  }


  pegarLista = () => {
    const tarefasCriadas = JSON.parse(localStorage.getItem("historicoTarefas") || '[]');

    this.setState({ tarefas: tarefasCriadas })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <ContainerPrincipal>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <Input value={this.state.inputValue} onChange={this.onChangeInput} />
          <Button onClick={this.criaTarefa}>Adicionar</Button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}


              </Tarefa>

            )
          })}
        </TarefaList>


      </ContainerPrincipal>
    )
  }
}

export default App
