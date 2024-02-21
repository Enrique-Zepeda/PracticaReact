import { TaskCard } from "./TaskCard";
export const TaskList = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
};
