import { useState } from "react";

export const Buscador = () => {
  const urlBase = "https://pokeapi.co/api/v2/pokemon/";

  const [buscar, setBuscar] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = async (e) => {
    setBuscar(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${urlBase}${buscar}`);
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      const data = await response.json();
      setPokemon(data);
      setError(null);
    } catch (error) {
      setError("Pokémon no encontrado");
      console.error("Ha ocurrido un error", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleOnSubmit}>
        <input
          className="border p-2 mr-2"
          type="text"
          placeholder="Buscar Pokemon"
          value={buscar}
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Buscar
        </button>
      </form>

      {error && <p>{error}</p>}

      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <p>ID: {pokemon.id}</p>
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
          <p>
            Type:{" "}
            {pokemon.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </p>
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
      )}
    </div>
  );
};
