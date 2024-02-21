import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-center font-bold text-white mb-2">
          Create Your Task
        </h1>
        <input
          placeholder="Write a Task"
          onChange={handleInput}
          className="bg-slate-300 p-3 w-full mb-2"
          value={title}
          autoFocus
        />
        {/* Estoy enviando lo que escribe el usuario a la funcion */}
        <textarea
          value={description}
          onChange={handleDescription}
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Write a description about the task"
        ></textarea>
        <button className="bg-cyan-400 p3 w-full mt-2 p-5">Save</button>
      </form>
    </div>
  );
};
