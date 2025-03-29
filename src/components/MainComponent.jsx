import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Services from "./service";
import Projects from "./project";
import Contact from "./contact";
import Footer from "./footer";
import ProtectedRoute from "./ProtectedRoute";
import AuthPage from "./login";
import "@fontsource/poppins"; 

const MainContent = () => {
    const location = useLocation();
    const hideFooter = location.pathname === "/"; 
  
    return (
      <>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/service" element={<ProtectedRoute><Services /></ProtectedRoute>} />
          <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          
        </Routes>
        {!hideFooter && <Footer />} 
      </>
    );
  };

  export default MainContent