import { useState } from "react";
import { Boton } from "./components/Boton";
import { Contador } from "./components/Contador";
function App() {
  const [cont, setCont] = useState(0);
  console.log(cont);
  const decrementar = () => {
    if (cont === 0) {
      return;
    }
    setCont(cont - 1);
  };
  const reinciar = () => {
    setCont(cont === 0 ? 0 : 0);
  };
  const incrementar = () => setCont(cont + 1);
  return (
    <>
      <h1>Botones</h1>
      <Boton name="Decrementar" onClick={decrementar} />
      <Boton name="Reiniciar" onClick={reinciar} />
      <Boton name="Incrementar" onClick={incrementar} />
      <Contador contador={cont} />
    </>
  );
}

export default App;
