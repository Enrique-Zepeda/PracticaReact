import { useState } from "react";

export const TaskForm = () => {
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value); // estoy seteando el valor que escribio el usuario
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Write a Task" onChange={handleInput} />
      {/* Estoy enviando lo que escribe el usuario a la funcion */}
      <button>Save</button>
    </form>
  );
};
