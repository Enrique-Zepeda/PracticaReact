import { useState } from "react";

export const Funciones = () => {
  const [cont, setCont] = useState(0);

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
  return { decrementar, reinciar, incrementar, cont };
};
