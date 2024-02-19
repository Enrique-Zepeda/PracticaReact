export const Personaje = ({ personaje }) => {
  return (
    // aveces tenemos que poner el return porque sino no muestra nada
    <div>
      <p>Nombre:{personaje.name}</p>
      <img
        src={personaje.image}
        alt={`Imagen del personaje:${personaje.name}`}
      />{" "}
      {/* Uso otras llaves porque en el return no se puede usar JS sin las llaves */}
    </div>
  );
};
