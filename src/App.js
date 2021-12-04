import "./index.js";
import Home from "./page/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.js";
function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
