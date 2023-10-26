import React from "react";

function PersonCard(props) {
  const { nombrePersona, NombreUsuario, emailUsuario } = props;

  return (
    <div className="card">
      <h2>Nombre: {nombrePersona}</h2>
      <p>Nombre de usuario: {NombreUsuario}</p>
      <p>Email: {emailUsuario}</p>
    </div>
  );
}

export default PersonCard;
