import { useNavigate } from "react-router-dom";
import "../config/credenciales";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const dataUser = Object.fromEntries(new window.FormData(event.target));
    // console.log(dataUser);

    const { email, password } = dataUser;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ uid: user.uid, email: user.email });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={onSubmit}>
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
