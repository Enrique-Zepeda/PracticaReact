export const TaskCard = ({ task, deleteTask }) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>{" "}
      {/*El onClick quiere decir esta funcion solo se va a a jecutar si se va a dar un click una vez se de un click vas a ejecutar la potra funcion*/}
    </div>
  );
};
