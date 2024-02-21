import { useEffect, useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { tasks as data } from "./data/task";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); //vamos a usar un filter para crear un nuevo arreglo sin el elemento que vamos a eliminar(por cada task que recorras => vamos a comparar si el task.id es diferente del task id que le estamos pasando )
  };

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
