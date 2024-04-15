import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import MovieDetails from "./components/details page/MovieDetails";
import fetchMovies from "./components/fetchMovies";
function App() {
  const { movies } = fetchMovies();

  return (
    <BrowserRouter basename={`movies`}>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        {movies.map((movie) => (
          <Route
            key={movie.id}
            path={":id"}
            element={<MovieDetails />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
