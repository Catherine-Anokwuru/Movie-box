import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=0e5fcb22f511960302347f8448364632`;

export const fetchMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}&page=${currentPage}`);
      // console.log(response)
      const data = response.data;
      const results = data.results;
      const movies = results.map((item) => {
        const {
          title,
          id,
          release_date,
          vote_average,
          backdrop_path,
          popularity,
          original_language,
        } = item;
        const date = release_date.slice(0, 4);
        const img = backdrop_path;
        const v = vote_average * 10;
        const vote = v.toFixed(1);
        const popular = popularity.toFixed(0);
        const lang = original_language.toUpperCase();
        // console.log(`movie${id}`);

        return { title, date, img, id, vote, popular, lang };
      });
      setMovies(movies.slice(0, 12));
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };
  // console.log(currentPage);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return { loading, movies, currentPage, setCurrentPage };
};
export default fetchMovies;
