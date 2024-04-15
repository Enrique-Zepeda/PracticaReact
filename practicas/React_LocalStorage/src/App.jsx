import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasksItems, setTasksItems] = useState([]);

  const createNewTask = (taskName) => {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  };

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <>
      <h1>Hola mundo</h1>
      <TaskCreator createNewTask={createNewTask} />
      <TaskList tasks={tasksItems} />
    </>
  );
}

export default App;
