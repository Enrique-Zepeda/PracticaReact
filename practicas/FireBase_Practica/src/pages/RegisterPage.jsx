import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <h1>RegisterPage</h1>egisterPage
      <button onClick={handleNavigate}>Login</button>
    </>
  );
};
