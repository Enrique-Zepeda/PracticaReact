import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskList } from "./components/TaskList";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
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
      <TaskList tasks={tasksItems} toggleTask={toggleTask} />
      <VisibilityControl
        setShowCompleted={(checked) => setShowCompleted(checked)}
      />
      {showCompleted === true && (
        <TaskList
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
    </>
  );
}

export default App;
