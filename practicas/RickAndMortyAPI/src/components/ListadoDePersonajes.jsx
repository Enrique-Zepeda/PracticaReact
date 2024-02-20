import { useEffect, useState } from "react";
import { Personaje } from "./Personaje";

export const Listado = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true); //para crear un loading cuando la app aun no a iniciado
  const [contador, setContador] = useState(1);

  const urlBase = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${urlBase}?page=${contador}`);
      const data = await response.json();
      console.log(data.results); //ponemos result porque la api tiene dos objeto que es info y result y nosotros solo queremos ver los results que son donde estan los personajes
      setLoading(false); //cuando termine de cargar los datos lo ponemos en false para que el estado cambie y cargue los personajes de la api
      setPersonajes(data.results); // igual aqui solo guardamos el objeto results que tiene el arreglo de personajes
    };
    fetchData();
  }, [contador]);

  const NavPage = () => {
    return (
      <>
        <h1>Page 1</h1>
        {contador > 1 ? (
          <button
            onClick={() => {
              setContador(contador - 1);
            }}
          >
            Pagina anterior
          </button>
        ) : (
          console.log("No hay pagina mayor a 1")
        )}
        <button
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Siguiente Pagina
        </button>
      </>
    );
  };

  return (
    <div className="container">
      <NavPage />
      {loading ? ( //si loading es true muestras loading si no muestras los personajes
        <h1>Loading</h1>
      ) : (
        <div className="row">
          {personajes.map((personaje) => {
            return (
              <div className="col-md-4" key={personaje.id}>
                <Personaje personaje={personaje} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
