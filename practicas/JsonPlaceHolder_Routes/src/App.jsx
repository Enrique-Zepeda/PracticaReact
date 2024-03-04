import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { NavBar } from "./components/NavBar";
import { PostsPage } from "./pages/PostsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserPage />}></Route>
          <Route path="/posts" element={<PostsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
