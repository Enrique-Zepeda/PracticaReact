import { useState } from "react";

export const TaskForm = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onAddTask(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Ingresa una tarea"
        onChange={onChange}
        value={inputValue}
      />
      <button>Agregar</button>
    </form>
  );
};
