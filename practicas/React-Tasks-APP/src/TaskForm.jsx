import { useState } from "react";

export const TaskForm = () => {
  const [tarea, setTarea] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="Write a Task" onChange={handleInput} />
      <button>Save</button>
    </form>
  );
};
