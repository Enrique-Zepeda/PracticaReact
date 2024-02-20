import { useEffect, useState } from "react";
import { tasks as data } from "./task"; // hacemos el as para no tener conflictos con task porque tienen el mismo nombre

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  );
};
