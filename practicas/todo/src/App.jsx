import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(["task1", "task2"]);
  console.log(tasks);
  const onAddTask = (newTask) => {
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };
  return (
    <>
      <h1>Lista de Tareas</h1>
      <TaskForm onAddTask={onAddTask} />
      <h3>Tareas</h3>
      {tasks.map((task) => (
        <TaskList key={task} task={task} />
      ))}
    </>
  );
}

export default App;
