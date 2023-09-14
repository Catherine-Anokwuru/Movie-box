import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const url =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=0e5fcb22f511960302347f8448364632";

export const fetchMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      const results = data.results;
      const movies = results.map((item) => {
        const {
          title,
          id,
          release_date,
          vote_average,
          backdrop_path, popularity, original_language
        } = item;
        const date = release_date.slice(0, 4);
        const img = backdrop_path;
        const v = vote_average * 10;
        const vote = v.toFixed(1);
        const popular = popularity.toFixed(0)
        const lang = original_language.toUpperCase()
        // console.log(popular);

        return { title, date, img, id, vote, popular, lang};
      });
      setMovies(movies.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, movies };
};
export default fetchMovies;
