import axios from "axios";
import { useEffect, useState } from "react";

const fetchMovieDetails = (id) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDetails = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0e5fcb22f511960302347f8448364632`
      );
      setMovieDetails(data);
      setLoading(false);
      // console.log(id);
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
  }, [id]);

  return { movieDetails, trailerKey, loading };
};

export default fetchMovieDetails;
