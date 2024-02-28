import { useNavigate } from "react-router-dom";
export const DashBoard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); //cuando dan click se ejecuta navigate y te redirige a la ruta que tiene
  };
  return (
    <div>
      <h1>DashBoard</h1>
      <button onClick={handleClick}>LogOut</button>
    </div>
  );
};
