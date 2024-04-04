import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { Link } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/missing-password") {
        setError("Contraseña vacia");
      }
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      }
      if (error.code === "auth/missing-email") {
        setError("Email vacio");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe contener almenos 6 caracteres");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El correo ya esta en uso");
      }
      if (error.code === "auth/invalid-credential") {
        setError("Credenciales invalidas");
      }
      if (error.code === "auth/too-many-requests") {
        setError("Demasiados intenos ¿Olvidaste la contraseña?");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error(error, "ha ocurrido un error");
    }
  };
  return (
    <div className=" w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="**********"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded leading-tight focus:outline-none focus:shadow-outline">
          Login
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        ¿No tienes una cuenta? <Link to={"/register"}>Registrate</Link>
      </p>
      <button
        className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
        onClick={handleGoogleLogin}
      >
        Google
      </button>
    </div>
  );
};
