import React, { useState } from 'react'
import MainScreen from "./components/ MainScreen";
import MatchScreen from './components/MatchScreen';

function App() {

  const [telaAtual, setTelaAtual] = useState("home")

  const mudaTela = () => {
    switch (telaAtual){
      case "home":
        return <MainScreen irParaMatchs={irParaMatchs}/>
      case "telaMatch":
        return <MatchScreen irParaHome={irParaHome}/>
      default:
        return <div>Erro, página não encontrada!</div>
    }
  }

  const irParaMatchs = () => {
    setTelaAtual("telaMatch")
  } 

  const irParaHome = () => {
    setTelaAtual("home")
  }
  return (
    <div>
      {/* <MainScreen /> */}
      {mudaTela()}
    </div>
  );
}

export default App;
