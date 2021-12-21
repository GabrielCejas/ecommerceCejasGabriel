import "./index.js";
import Home from "./page/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <ItemListContainer greeting="Mercado Informatico"/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
