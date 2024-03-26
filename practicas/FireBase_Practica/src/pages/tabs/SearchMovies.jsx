import { useState } from "react";
import { HamburgerMenu } from "../../components/HamburgerMenu";

export const SearchMovies = () => {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const { busqueda } = Object.fromEntries(new window.FormData(e.target));
    console.log(busqueda);
  };

  return (
    <>
      <HamburgerMenu />
      <h1>Buscador Peliculas</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Ingresa una Pelicula" name="busqueda" />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};
