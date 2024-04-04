import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "./Alert";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
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
    }
  };
  return (
    <div className=" w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="block text-gray-700 text-sm font-bold mb-2">
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
        <div className="block text-gray-700 text-sm font-bold mb-2">
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
          Register
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Ya tienes una cuenta <Link to={"/login"}>Inicia Sesion</Link>
      </p>
    </div>
  );
};
