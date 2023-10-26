import React, { useEffect, useState } from "react";  
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  const personList = [
    { id:"01", name: "Jose", username: "jose45", email: "jose@email.com" },
    { id:"02", name: "Luis", username: "lucho45", email: "luis@email.com" },
    { id:"03", name: "Cata", username: "cate10", email: "cata@email.com" },
    { id:"04", name: "Claudio", username: "claudio643", email: "claudio@email.com" },
  ];  

  const [personas, setPersonas] = useState([]);

  const mostrarPersonas = () => {
    setPersonas(personList);
  };

  const deletePersonas = () => {
    setPersonas([]);
  };

  const setPerson = () => {
    
    const person = {
      id: "05",
      name: "Carlos",
      username: "Carlitos",
      email: "jose@email.com"
    }
    personList.push(person);
    setPersonas(personList)
  }

  return (
    <div className="App">
      <h1>Lista de personas</h1>
      <button onClick={mostrarPersonas}>Mostrar lista</button>
      <button onClick={deletePersonas}>Borrar lista</button>
      <button onClick={setPerson}>Agregar persona</button>

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
