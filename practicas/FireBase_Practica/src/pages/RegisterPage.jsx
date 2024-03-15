import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const dataUser = Object.fromEntries(new window.FormData(event.target));
    console.log(dataUser);
  };

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name" required name="name" />
        <input type="email" placeholder="email" required name="email" />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
        />
        <button type="submit">SignUp</button>
      </form>
      <button onClick={handleNavigate}>Login</button>
    </>
  );
};
