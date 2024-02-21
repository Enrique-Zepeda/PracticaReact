import { TaskCard } from "./TaskCard";
export const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) {
    return <h1>No Hay Tareas</h1>;
  }
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </>
  );
};
