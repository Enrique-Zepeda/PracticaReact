import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
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
    <TaskContext.Provider
      value={{
        tasks, //le estoy pasando el arreglo que es task: task pero se puede recortar a solo tasks
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
