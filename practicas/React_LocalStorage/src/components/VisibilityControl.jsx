export const VisibilityControl = ({
  setShowCompleted,
  cleanTask,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("Do u want delete it?")) {
      cleanTask();
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => setShowCompleted(e.target.checked)}
        checked={isChecked}
      />
      <label>Show Tasks Done</label>
      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};
