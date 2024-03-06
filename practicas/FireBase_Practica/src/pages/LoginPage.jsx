import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("register");
  };

  return (
    <>
      <h1>LoginPage</h1>
      <form>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
      </form>
      <button onClick={handleNavigate}>Register</button>
    </>
  );
};
