
import React, { useEffect } from "react";

// hacer fetch de datos

const FetchComponent = () => {
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  const getFetch = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <button onClick={getFetch}>Click me</button>
    </div>
  );
};

export default FetchComponent;
