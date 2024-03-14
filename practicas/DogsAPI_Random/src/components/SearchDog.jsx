import { useEffect, useRef, useState } from "react";

export const SearchDog = () => {
  const [dogs, setDogs] = useState([]);
  const [news, setNews] = useState(1);
  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        setDogs([data]);
      } catch (error) {
        console.error(error, "Ha ocurrido un error");
      }
    };
    fetchDogs();
  }, [news]);

  return (
    <>
      <h1>Randoms Dogs</h1>
      <button
        onClick={() => {
          setNews(news + 1);
        }}
      >
        Other Dog
      </button>
      <div>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <img src={dog.message} alt="Perro" />
          </div>
        ))}
      </div>
    </>
  );
};
