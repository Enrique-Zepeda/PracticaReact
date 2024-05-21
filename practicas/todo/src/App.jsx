import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add new title task"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
