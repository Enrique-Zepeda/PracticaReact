import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
