import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogueado, setUserLogueado] = useState({});
  const [userLocal, setUserLocal] = useState({});

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    }

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const user = {
      email: email,
      password: password,
    };

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmail("");
        setPassword("");
        setUserLogueado(data);
        console.log("token antes de decodificar", data.token);
        if(data.token !== undefined){
        const token = jwtDecode(JSON.stringify(data.token));
        console.log("Token después de decodificar", token);
        localStorage.setItem("token", JSON.stringify(data.token));
        }
      });
  };

  useEffect(() => {
    if (userLogueado.status === 200) {
      localStorage.setItem("user", JSON.stringify(userLogueado.data));
    }
  }, [userLogueado]);

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUserLocal(JSON.parse(localStorage.getItem("user")));
    }
  }, [userLogueado]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Formulario de registro</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={handleEmail}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={handlePassword}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            {localStorage.getItem("user") !== null && (
              <div>
                <h3>Usuario logueado</h3>
                <p>Nombre: {userLocal.name}</p>
                <p>Apellido: {userLocal.lastName}</p>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <button type="button" className="btn btn-primary" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
