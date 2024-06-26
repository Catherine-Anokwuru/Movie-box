import axios from "axios";
import { useEffect, useState } from "react";

const fetchMovieDetails = (id) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [people, setPeople] = useState({ director: {}, writers: [], cast: [] });
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDetails = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0e5fcb22f511960302347f8448364632`
      );
      // console.log(data)
      setMovieDetails(data);
      setLoading(false);
      // console.log(id);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const fetchPeople = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0e5fcb22f511960302347f8448364632`
      );
      const peopleData = response.data;
      const director = peopleData.crew.find(
        (dir) => dir.job === "Director"
      );
      const someWriters = () => {
        const wr = peopleData.crew;
        const writerStaff = wr.filter((item) => {
          return item.department === "Writing";
        });
        return writerStaff.slice(0, 3);
      };
      const writers = someWriters();
      // console.log(writers);
      const castNames = () => {
        const cast = peopleData.cast.map((data) => ({
          name: data.name,
          popularity: parseFloat(data.popularity),
        }));
        cast.sort((a, b) => b.popularity - a.popularity);
        const topThree = cast
          .slice(0, 3)
          .map((person) => person.name);
        return topThree;
      };
      const cast = castNames();
      // console.log(cast);
      // console.log(cast);
      setPeople({ director, writers, cast });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const fetchVideo = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0e5fcb22f511960302347f8448364632`
      );
      const videoData = response.data;

      // Find the first video with type "trailer"
      const trailerVideo = videoData.results.find(
        (video) => video.type === "Trailer"
      );

      if (trailerVideo) {
        setTrailerKey(trailerVideo.key);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      return (
        <div>
          <h2>Error loading video</h2>
        </div>
      );
    }
  };

  useEffect(() => {
    fetchDetails(id);
    fetchVideo(id);
    fetchPeople(id);
  }, [id]);

  return { movieDetails, trailerKey, loading, people };
};

export default fetchMovieDetails;
