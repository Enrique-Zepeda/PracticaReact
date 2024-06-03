import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasksList, setTasksList] = useState([]);
  return (
    <>
      <h1>TodoList</h1>
      <TaskForm tasksList={tasksList} setTasksList={setTasksList} />
      <TaskList tasksList={tasksList} setTasksList={setTasksList} />
    </>
  );
}

export default App;
