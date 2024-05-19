import { useState } from "react";

export const Funciones = (incremento = 1) => {
  const [cont, setCont] = useState(0);

  const decrementar = () => {
    if (cont === 0) {
      return;
    }
    setCont(cont - incremento);
  };

  const reinciar = () => {
    setCont(cont === 0 ? 0 : 0);
  };

  const incrementar = () => setCont(cont + incremento);
  return { decrementar, reinciar, incrementar, cont };
};
