import { TaskRow } from "./TaskRow";
export const TaskList = ({ tasks, toggleTask }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
          ))}
        </tbody>
      </table>
    </>
  );
};