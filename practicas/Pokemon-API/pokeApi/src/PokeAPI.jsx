import { Buscador } from "./components/Buscador";

export const PokeAPI = () => {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-center m-10 text-5xl">PokeAPI</h1>
      <hr />
      <Buscador></Buscador>
    </div>
  );
};
