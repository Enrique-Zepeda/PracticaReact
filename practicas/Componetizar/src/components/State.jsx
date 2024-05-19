import { Funciones } from "./Funciones";
import { Boton } from "./Boton";
import { Contador } from "./Contador";

export const State = ({ name, incremento }) => {
  const { decrementar, reinciar, incrementar, cont } = Funciones(incremento);
  return (
    <>
      <h1>{name}</h1>
      <Boton name="Decrementar" onClick={decrementar} />
      <Boton name="Reiniciar" onClick={reinciar} />
      <Boton name="Incrementar" onClick={incrementar} />
      <Contador contador={cont} />
    </>
  );
};
