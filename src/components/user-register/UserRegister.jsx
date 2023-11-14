import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {

    const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userCreate, setUserCreate] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (!name || !lastName || !email || !password) {
        alert("Todos los campos son obligatorios");
        return;
        }
        const user = {
            "name": name,
            "lastName": lastName,
            "email": email,
            "password": password
        }

        document.getElementById("name").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        
        fetch('http://localhost:8080/api/v1/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            setName("");
            setLastName("");
            setEmail("");
            setPassword("");
          if (data.status === 201)
          setUserCreate(true);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        if(userCreate){
            navigate('/login')
        }

    },[navigate, userCreate])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Formulario de registro</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={handleName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  onChange={handleLastname}
                />
              </div>
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
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
