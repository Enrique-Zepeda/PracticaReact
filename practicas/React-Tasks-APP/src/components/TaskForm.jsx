import { useState } from "react";

export const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value); // estoy seteando el valor que escribio el usuario
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Write a Task"
        onChange={handleInput}
        value={title}
        autoFocus
      />
      {/* Estoy enviando lo que escribe el usuario a la funcion */}
      <textarea
        value={description}
        onChange={handleDescription}
        placeholder="Write a description about the task"
      ></textarea>
      <button>Save</button>
    </form>
  );
};
