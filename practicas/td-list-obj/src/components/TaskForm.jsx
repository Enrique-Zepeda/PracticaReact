import { useState } from "react";

export function TaskForm({ tasksList, setTasksList }) {
  //Creandoe estado con un objeto
  const [task, setTask] = useState({
    id: "1",
    title: "",
    description: "",
  });

  const { id, title, description } = task;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTask({
      ...task,
      [name]: value,
    });
    console.log(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Dentro");
    setTasksList((prevTaskList) => [...prevTaskList, task]);
    setTask({
      id: "",
      title: "",
      description: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Titulo"
        onChange={handleChange}
        name="title"
        value={title}
      />
      <input
        type="text"
        placeholder="Descripcion"
        onChange={handleChange}
        name="description"
        value={description}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
