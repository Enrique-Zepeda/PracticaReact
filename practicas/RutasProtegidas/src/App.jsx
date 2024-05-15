import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { HomeUser } from "./pages/HomeUser";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { Admin } from "./pages/Admin";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/landing"} element={<Landing />} />
        <Route path={"/user"} element={<HomeUser />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/analytics"} element={<Analytics />} />
        <Route path={"/admin"} element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
