import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    console.log(newTaskName);
    setNewTaskName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa una tarea"
          onChange={(e) => {
            setNewTaskName(e.target.value);
          }}
        />
        <button>Ingresar</button>
      </form>
    </div>
  );
};
