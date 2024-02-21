import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-600 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 mt-2 rounded-md hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>{" "}
      {/*El onClick quiere decir esta funcion solo se va a a jecutar si se va a dar un click una vez se de un click vas a ejecutar la potra funcion*/}
    </div>
  );
};
