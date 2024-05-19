export const Boton = ({ name, onClick }) => {
  console.log(name);
  return <button onClick={onClick}>{name}</button>;
};
