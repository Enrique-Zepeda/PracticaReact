import { useEffect, useState } from "react";

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    console.log("cargo...");
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setPersonajes(data);
      console.log(data.results); //ponemos result porque la api tiene dos objeto que es info y result y nosotros solo queremos ver los results que son donde estan los personajes
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  );
}

export default App;
