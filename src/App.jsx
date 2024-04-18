import "./App.css";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListConteiner
        title="Lista contenedora"
        elemento1="Elemento 1"
        elemento2="Elemento 2"
        elemento3="Elemento 3"
      />
    </>
  );
}

export default App;
