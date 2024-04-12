import { useState } from "react";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  const [tasksItems, setTasksItems] = useState([
    {
      name: "mi primer tarea",
      done: true,
    },
    {
      name: "mi segunda tarea",
      done: false,
    },
    {
      name: "mi tercera tarea",
      done: false,
    },
  ]);
  return (
    <>
      <h1>Hola mundo</h1>
      <TaskCreator />
      {tasksItems.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </>
  );
}

export default App;
