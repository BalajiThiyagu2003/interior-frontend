import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '/Main Project/interior-frontend/src/App.css';
import "@fontsource/poppins"; 

import { BrowserRouter as Router } from "react-router-dom";



import Header from "./components/header";
import MainContent from "./components/MainComponent";


const App = () => {

  return (
    <>
  
      <Router>

        <Header />
        <MainContent />
      </Router>
    </>
  );
};

export default App;
