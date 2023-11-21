import React, { useEffect, useState } from "react";

const RickFetch = () => {
  const [characters, setCharacters] = useState([]);
  //   

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <h1>Rick and Morty</h1>
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <div className="card">
                <img
                  src={character.image}
                  alt={character.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3>{character.name}</h3>
                  <p>{character.species}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RickFetch;
