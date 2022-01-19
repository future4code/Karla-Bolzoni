import React from "react";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <ChakraProvider>
      <Container maxW='container.xl' padding={50} centerContent  bg='gray.200'>
      <HomePage/>
       
        {/* <Header/>
        
       <ListTripsPage/>
        <ApplicationFormPage/>
        <LoginPage/>
        <AdminHomePage/>
        <TripDetailsPage/>
        <CreateTripPage/> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
