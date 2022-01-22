import React from "react";
import { ChakraProvider, Container } from '@chakra-ui/react'
import Router from "./route/Router";
import Header from "./components/Header";


function App() {
  return (
    <ChakraProvider>
      <Header/>
      
      <Router/>
      
     
    </ChakraProvider>
  )
}

export default App;
