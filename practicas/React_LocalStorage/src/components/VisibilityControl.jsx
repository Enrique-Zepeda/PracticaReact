export const VisibilityControl = ({ setShowCompleted }) => {
  const handleDelete = () => {
    alert("limpiando");
  };
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      <label>Show Tasks Done</label>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
