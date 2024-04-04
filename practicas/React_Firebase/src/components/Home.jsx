import { useAuth } from "../context/AuthContext";

export const Home = () => {
  const { user, logout, loading } = useAuth();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error, "ha ocurrido un error");
    }
  };

  if (loading) return <h1>Cargando....</h1>;

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
