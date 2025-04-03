import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../src/App.css';
import "@fontsource/poppins"; 
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "./components/maincomponent/MainComponent";
import { UserProvider } from "./components/usercontext/usercontext";



const App = () => {

  return (
    <UserProvider>
  
      <Router>

        <MainContent/>
        
      </Router>
      </UserProvider>
  );
};

export default App;
