import React, { useEffect, useState } from "react";

export const FotosPage = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setFotos(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Fotos</h1>
      <div>
        {fotos.map((foto) => (
          <div key={foto.id}>
            <h3>{foto.title}</h3>
            <img src={foto.url} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};
