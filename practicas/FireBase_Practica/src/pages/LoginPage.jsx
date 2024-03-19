import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataUser = Object.fromEntries(new window.FormData(event.target));
    const { email, password } = dataUser;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          console.log({ uid: user.uid, email: user.email });
          navigate("homeScreen");
        } else {
          alert("Correo Electronico no Verificado");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  const handleNavigate = () => {
    navigate("register");
  };

  return (
    <>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required name="email" placeholder="Email" />
        <input
          type="password"
          required
          name="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleNavigate}>Register</button>
    </>
  );
};
