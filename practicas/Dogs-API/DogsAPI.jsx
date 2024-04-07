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
    <div>
      <h1 className="title">Dogs API</h1>
      <hr className="border border-primary border-3 opacity-50" />
      <select
        className="form-select form-select-lg mb-3"
        value={buscar}
        onChange={handleInputSelect}
      >
        <option value="">Selecciona un perro</option>
        <option value="boxer">Boxer</option>
        <option value="dachshund">Layla</option>
        <option value="beagle">beagle</option>
        <option value="doberman">doberman</option>
        <option value="labrador">Labrador</option>
        <option value="african">african</option>
        <option value="airedale">airedale</option>
        <option value="akita">akita</option>
        <option value="appenzeller">appenzeller</option>
        <option value="basenji">basenji</option>
        <option value="bluetick">bluetick</option>
        <option value="borzoi">borzoi</option>
        <option value="bouvier">bouvier</option>
        <option value="briard">briard</option>
        <option value="chow">chow</option>
        <option value="clumber">clumber</option>
        <option value="cockapoo">cockapoo</option>
        <option value="coonhound">coonhound</option>
        <option value="cardigan corgi">cardigan corgi</option>
        <option value="dalmatian">dalmatian</option>
      </select>
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={handleButtonClick}
      >
        Buscar
      </button>
      <hr />
      {imagen && <img className="img-fluid" src={imagen} alt="Dog" />}
    </div>
  );
};
