import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../src/App.css';
import "@fontsource/poppins"; // Defaults to normal weight

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
