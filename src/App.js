import React, { useEffect, useState } from "react";  
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {

  const [personas, setPersonas] = useState([]);

  const mostrarPersonas = () => {
    setPersonas();
  };

  const deletePersonas = () => {
    setPersonas([]);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setPersonas(data));
  }, []);

  return (
    <div className="App">
      <h1>Lista de personas</h1>
      <button onClick={mostrarPersonas}>Mostrar lista</button>
      <button onClick={deletePersonas}>Borrar lista</button>

      {personas.map((person) => (
        <PersonCard
          key={person.id}
          nombrePersona={person.name}
          NombreUsuario={person.username}
          emailUsuario={person.email}
        />
      ))}
    </div>
  );
}

export default App;
