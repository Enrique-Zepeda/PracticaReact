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
    <div className="w-full max-w-sm m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl mb-4">
          Welcome {user.displayName || user.email}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-200 hover:bg-red-500 text-black font-bold py-2 px-4 rounded leading-tight focus:outline-none focus:shadow-outline"
        >
          logout
        </button>
      </div>
    </div>
  );
};
