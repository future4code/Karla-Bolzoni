import React from "react";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";


function App() {
  return (
    <div className="App">
      <ListTripsPage/>
      <ApplicationFormPage/>
      <LoginPage/>
      <AdminHomePage/>
      <TripDetailsPage/>
      <CreateTripPage/>
    </div>
  );
}

export default App;
