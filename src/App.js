import "./index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
import Home from "./page/Home"
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home to="/Home" />}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer greeting="Mercado Informatico" />}/>
        <Route path="/DetalledelProducto/:id" element={<ItemDetailContainer />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
