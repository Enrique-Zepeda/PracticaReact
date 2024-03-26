import { useState } from "react";
import { HamburgerMenu } from "../../components/HamburgerMenu";

export const SearchMovies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const URL_BASE = "https://api.themoviedb.org/3/search/movie";
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
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HamburgerMenu />
      <h1>Buscador Peliculas</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Ingresa una Pelicula" name="busqueda" />
        <button type="submit">Buscar</button>
      </form>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
        </div>
      ))}
    </>
  );
};
