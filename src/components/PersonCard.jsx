import React from "react";

function PersonCard(props) {
  const { nombrePersona, NombreUsuario, emailUsuario } = props;

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Nombre: {nombrePersona}</h2>
        <p className="card-text">Nombre de usuario: {NombreUsuario}</p>
        <p>Email: {emailUsuario}</p>
      </div>
    </div>
  );
}

export default PersonCard;
