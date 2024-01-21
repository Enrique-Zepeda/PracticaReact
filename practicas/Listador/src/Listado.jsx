import React, { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre} {visto ? "✔" : "❌"}
    </li>
  );
};

export const Listado = () => {
  // Initialize the array outside of the return statement
  let listadoSecciones = [
    { nombre: "Instalacion", visto: true },
    { nombre: "useState", visto: true },
    { nombre: "vite y react", visto: true },
    { nombre: "condicionales", visto: false },
    { nombre: "app", visto: false },
  ];

  // Correctly initialize the state without wrapping listadoSecciones in an additional array
  const [arreglo, setArreglo] = useState(listadoSecciones);

  return (
    <>
      <h1>Listado de temas del curso</h1>
      <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>{/*  agregarTarea es el nombre que va a recibir el hijo 
      y setArreglo es lo que le mandamos desde el padre que es const [arreglo, setArreglo] = useState(listadoSecciones);
        y luego en el hijo que es AgregarTarea.jsx lo desestructuramos con {} export const AgregarTarea = ({agregarTarea}) => {
      */}
      <ol>
        {arreglo.map((iterador) => (
          <Items
            key={iterador.nombre}
            nombre={iterador.nombre}
            visto={iterador.visto}
          />
        ))}
      </ol>
    </>
  );
};
