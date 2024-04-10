import { useState } from "react";

export const TaskCreator = () => {
  const [task, setTask] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    localStorage.setItem("Task", task);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa una tarea"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};
