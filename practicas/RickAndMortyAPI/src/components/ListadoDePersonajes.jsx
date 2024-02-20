import { useEffect, useState } from "react";
import { Personaje } from "./Personaje";

export const Listado = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    console.log("cargo...");
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log(data.results); //ponemos result porque la api tiene dos objeto que es info y result y nosotros solo queremos ver los results que son donde estan los personajes
      setPersonajes(data.results); // igual aqui solo guardamos el objeto results que tiene el arreglo de personajes
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {personajes.map((personaje) => {
          return (
            <div className="col-md-4" key={personaje.id}>
              <Personaje personaje={personaje} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
