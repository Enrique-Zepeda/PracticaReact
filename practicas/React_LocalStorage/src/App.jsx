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

  const createNewTask = (taskName) => {
    setTasksItems([...tasksItems, { name: taskName, done: false }]);
  };
  return (
    <>
      <h1>Hola mundo</h1>
      <TaskCreator createNewTask={createNewTask} />
      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
