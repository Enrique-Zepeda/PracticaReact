import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";
import { UsersPages } from "./pages/UsersPages";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPages />} />
        <Route path="/user/:id" element={<UserPage />} />
        {/* El :id es como decirle que cualquier cosa puede ir ahi*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
