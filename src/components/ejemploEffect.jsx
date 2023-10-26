

import React, { useEffect, useState } from 'react'

function EjemploEffect() {

    const [contador, setContador] = useState(0);

    //se ejecuta siempre que el componente se renderiza (al montarse) y al cambiar el estado.
    useEffect(() => {
        console.log("Hola mundo desde el useEffect")
    });

    // se ejecuta solo al cargar el componente
    useEffect(() => {
        console.log("Carga solo al renderizar el componente")
    }, []);

    // se ejecuta al cargar el componente y cuando hay un cambio en el estado
    useEffect(() => {
        console.log("Carga cuando cambia el estado")
    }, [contador]);



  return (
    <div>
        <p>Contador es: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Click me</button>


    </div>
  )
}

export default EjemploEffect