import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Services from "../service/service";
import Projects from "../project/project";
import Contact from "../contactlist/contact";
import Footer from "../footer/footer";
import ProtectedRoute from "../protectedroute/ProtectedRoute";
import AuthPage from "../login/login";
import "@fontsource/poppins";
import ContactTable from "../contactlist/contactlist";
import AddProject from "../addproject/addproject";
import Header from "../header/header";

const MainContent = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/";
    const hideheader = location.pathname === "/login";
  
  return (
    <>  
      {!hideheader &&<Header/>}
     <Routes>
      <Route path="/" element={<Navigate to={'/login'} />} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
      <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
      <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      <Route path="/contact-list" element={<ProtectedRoute><ContactTable /></ProtectedRoute>} />
      <Route path="/add-project" element={<ProtectedRoute><AddProject /></ProtectedRoute>} />
      <Route path="/login" element={<AuthPage />} />

    </Routes>
      {!hideFooter && <Footer />}
     

    </>

  );
};

export default MainContent