import React, { useState } from "react";

export const UsingUseState = () => {
  const [Elemento, Funcion] = useState(); //asi es como funciona el useState Se extrae el primer valor(variable) y el segundo es la funcion que me permite actualizar la variable
  const [counter, setCounter] = useState(0); //aqui le digo que la variable se inicializa en 0 es igual que decir const counter=0;

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1); //aqui cambio el valor de counter
        }}
      >
        Sumar
      </button>
    </>
  );
};
