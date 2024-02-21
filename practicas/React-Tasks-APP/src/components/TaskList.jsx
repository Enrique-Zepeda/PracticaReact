import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
export const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1>No Hay Tareas</h1>;
  }
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
};
