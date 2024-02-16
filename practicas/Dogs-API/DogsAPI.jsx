import React, { useEffect, useState } from "react";

export const DogsAPI = () => {
  const [buscar, setBuscar] = useState("");
  const [imagen, setImagen] = useState("");
  const [recargar, setRecargar] = useState("");
  const URL = `https://dog.ceo/api/breed/${buscar}/images/random`;

  useEffect(() => {
    if (buscar) {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setImagen(data.message))
        .catch((error) => console.error("Error al cargar la imagen", error));
    }
  }, [buscar, recargar]);

  const handleInputSelect = (e) => {
    setBuscar(e.target.value);
  };

  const handleButtonClick = () => {
    setRecargar((prev) => prev + 1);
  };

  return (
    <>
      <h1>Dogs API</h1>
      <hr className="border border-primary border-3 opacity-50" />
      <select
        className="form-select form-select-lg mb-3"
        value={buscar}
        onChange={handleInputSelect}
      >
        <option value="">Selecciona un perro</option>
        <option value="boxer">Boxer</option>
        <option value="labrador">Labrador</option>
      </select>
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={handleButtonClick}
      >
        Buscar
      </button>
      {imagen && <img src={imagen} alt="Dog" />}
    </>
  );
};
