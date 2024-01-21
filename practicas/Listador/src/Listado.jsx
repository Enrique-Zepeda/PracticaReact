import React, { useState } from 'react';

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre} {visto ? '✔' : '❌'}
    </li>
  );
};

export const Listado = () => {
  // Initialize the array outside of the return statement
  let listadoSecciones = [
    { nombre: 'Instalacion', visto: true },
    { nombre: 'Instalacion', visto: true }, // You have 'Instalacion' twice. Consider changing it if it's not intended.
    { nombre: 'useState', visto: true },
    { nombre: 'vite y react', visto: true },
    { nombre: 'condicionales', visto: false },
    { nombre: 'app', visto: false },
  ];

  // Correctly initialize the state without wrapping listadoSecciones in an additional array
  const [arreglo, setArreglo] = useState(listadoSecciones);

  return (
    <>
      <h1>Listado de temas del curso</h1>
      <ol>
        {arreglo.map(iterador => (
          <Items key={iterador.nombre} nombre={iterador.nombre} visto={iterador.visto} />
        ))}
      </ol>

    </>
  );
};
