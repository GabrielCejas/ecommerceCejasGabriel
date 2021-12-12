import "./index.js";
import Home from "./page/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <ItemListContainer
        greeting="Mercado Informatico"
      />
    </>
  );
}

export default App;
