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
    { id:0, nombre: "Instalacion", visto: true },
    { id:1, nombre: "vite y react", visto: true },
    { id:2, nombre: "mao", visto: true },
    { id:3, nombre: "condicionales", visto: false },
    { id:4, nombre: "formulario", visto: false },
  ];

  const [arreglo, setArreglo] = useState(listadoSecciones);

  const onAgregarTarea = (val) => {
    let valor = val.trim()// se hace esto por si alguien el forms pone espacios al principio y al final y
    // se los quite y no haya problema de validacion despues
    if(valor < 1) return //el return sirve por si la validacion es verdadera no continue con la funcion
    const envio = {
        id: arreglo.length,//si el arreglo lo empezamos con el id 1 se le pone id: arreglo.length + 1,
        nombre: valor,
        visto: false
    }
    setArreglo([...arreglo, envio])
  }

  return (
    <>
      <h1>Listado de temas del curso</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
      <ol>
        {arreglo.map((iterador) => (
          <Items
            key={iterador.id}
            nombre={iterador.nombre}
            visto={iterador.visto}
          />
        ))}
      </ol>
    </>
  );
};
