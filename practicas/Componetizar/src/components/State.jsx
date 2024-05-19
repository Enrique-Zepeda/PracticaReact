import { Funciones } from "./Funciones";
import { Boton } from "./Boton";
import { Contador } from "./Contador";

export const State = () => {
  const { decrementar, reinciar, incrementar, cont } = Funciones();
  return (
    <>
      <h1>Botones</h1>
      <Boton name="Decrementar" onClick={decrementar} />
      <Boton name="Reiniciar" onClick={reinciar} />
      <Boton name="Incrementar" onClick={incrementar} />
      <Contador contador={cont} />
    </>
  );
};
