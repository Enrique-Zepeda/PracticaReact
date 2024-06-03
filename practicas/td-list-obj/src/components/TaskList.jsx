export function TaskList({ tasksList, setTasksList }) {
  return (
    <>
      {tasksList.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  );
}
