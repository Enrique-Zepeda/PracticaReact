import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { NavBar } from "./components/NavBar";
import { PostsPage } from "./pages/PostsPage";
import { CommentsPage } from "./pages/CommentsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserPage />}></Route>
          <Route path="/posts" element={<PostsPage />}></Route>
          <Route path="/comments" element={<CommentsPage />}></Route>
          <Route path="/fotos" element={<CommentsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
