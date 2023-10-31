import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

function PersonList() {
  const [data, setData] = useState([]);
  const [personas, setPersonas] = useState([]);

  const mostrarPersonas = () => {
    setPersonas(data);
  };

  const deletePersonas = () => {
    setPersonas([]);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
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

export default PersonList;
