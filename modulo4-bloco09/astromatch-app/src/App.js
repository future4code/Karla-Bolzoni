import React, { useState } from 'react'
import MainScreen from "./components/ MainScreen";
import MatchScreen from './components/MatchScreen';
import { Box } from '@mui/material';
import Header from './components/Header';

function App() {

  const [telaAtual, setTelaAtual] = useState("home")

  const mudaTela = () => {
    if(telaAtual === "home") return <MainScreen/>

      return <MatchScreen/>
  }

  const changePage = (telaAtual) => {
    if(telaAtual === "telaMatch") {
    setTelaAtual("home")
    }else {
    setTelaAtual("telaMatch")
    }
  }
 
  return (
    <Box sx={{ width:300, height:"70vh", border: 1 ,  mx: 'auto'}}>
      <Header changePage={() => changePage(telaAtual)} telaAtual={telaAtual}/>
      {mudaTela()}
    </Box>
  );
}

export default App;
