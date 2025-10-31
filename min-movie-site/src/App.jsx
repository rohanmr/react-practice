import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Likes from "./pages/Likes";
import { BrowserRouter } from "react-router-dom";
import Comments from "./pages/Comments";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:movieID" element={<MovieDetails />}>
            <Route path="likes" element={<Likes />} />
            <Route path="comments" element={<Comments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
