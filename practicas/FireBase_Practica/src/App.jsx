import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { SearchMovies } from "./pages/tabs/SearchMovies";
import { SearchActor } from "./pages/tabs/SearchActor";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchMovies />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/searchMovie" element={<SearchMovies />} />
        <Route path="/searchActor" element={<SearchActor />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
