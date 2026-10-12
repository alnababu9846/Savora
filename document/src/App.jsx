import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu"
import About from "./Pages/About"
import Contact from "./Pages/Contact";

import "./App.css"
import Footer from "./Component/Footer";

function App(){
    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default App