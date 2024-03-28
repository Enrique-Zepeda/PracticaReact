import { useState } from "react";
import { HamburgerMenu } from "../../components/HamburgerMenu";

export const SearchActor = () => {
  const [search, setSearch] = useState("");
  const [actors, setActors] = useState([]);

  const URL_BASE = "https://api.themoviedb.org/3/search/person";
  const apiKey = import.meta.env.VITE_API_KEY;

  const onSubmit = (e) => {
    e.preventDefault();
    const { busqueda } = Object.fromEntries(new window.FormData(e.target));
    console.log(busqueda);
    setSearch(busqueda);
    fetchPeliculas(busqueda);
  };

  const fetchPeliculas = async (searchTerm) => {
    try {
      const response = await fetch(
        `${URL_BASE}?query=${encodeURIComponent(searchTerm)}&api_key=${apiKey}`
      );
      const data = await response.json();
      console.log(data.results);
      setActors(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <HamburgerMenu />
      <h1>Buscador Actores</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Ingresa una Pelicula" name="busqueda" />
        <button type="submit">Buscar</button>
      </form>
      <div className="movie-list">
        {actors.map((actor) => (
          <div key={actor.id} className="movie-card">
            <h1>{actor.name}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.overview}</p>
          </div>
        ))}
      </div>
    </>
  );
};
