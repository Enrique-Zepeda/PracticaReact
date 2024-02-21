import { useState } from "react";

export const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value); // estoy seteando el valor que escribio el usuario
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
    };
    console.log(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Write a Task" onChange={handleInput} />
      {/* Estoy enviando lo que escribe el usuario a la funcion */}
      <button>Save</button>
    </form>
  );
};
