import { useEffect, useState } from "react";

function App() {
  const [rick, setRick] = useState([]);

  useEffect(() => {
    console.log("cargo...");
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setRick(data);
      console.log(data);
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
