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
        name="Procesador gamer Intel Core i9"
        descripcion="Ejecuta con rapidez y eficiencia cualquier tipo de programa sin afectar el funcionamiento total del dispositivo."
        precio={88000}
      />
    </>
  );
}

export default App;
