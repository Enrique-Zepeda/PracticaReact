import { TaskRow } from "./TaskRow";
export const TaskList = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRow = (doneValue) => {
    return tasks
      .filter((tasks) => tasks.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>{taskTableRow(showCompleted)}</tbody>
      </table>
    </>
  );
};
