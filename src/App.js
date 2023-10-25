import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/button";
import Parrafo from "./components/parrafo/parrafo";
import EjemploEstado from "./components/estado/EjemploEstado";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
      <Parrafo />
      <EjemploEstado />
    </div>
  );
}

export default App;
