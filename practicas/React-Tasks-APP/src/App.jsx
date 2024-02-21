import { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { tasks as data } from "./task";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = ({ task }) => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
