import { useEffect, useState } from "react";

function App() {
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
    <>
      <h1>Rick Y Morty</h1>
      {personajes.map((personaje) => {
        return (
          // aveces tenemos que poner el return porque sino no muestra nada
          <div key={personaje.id}>
            <p>Nombre:{personaje.name}</p>
            <img
              src={personaje.image}
              alt={`Imagen del personaje:${personaje.name}`}
            />{" "}
            {/* Uso otras llaves porque en el return no se puede usar JS sin las llaves */}
          </div>
        );
      })}
    </>
  );
}

export default App;
