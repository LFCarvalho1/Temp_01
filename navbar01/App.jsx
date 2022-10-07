import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Processo from "./components/processo/Processo";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/processo" element={<Processo />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
      </BrowserRouter>
    </>

  );

}

export default App;
