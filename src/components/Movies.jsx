import chevron from "../assets/Chevron right.svg";
import card from "../assets/Poster Image.png";
import fav from "../assets/Favorite.png";
import series from "../assets/TV Series.png";
import imdb from "../assets/imdb.png";
import rt from "../assets/rottentom.png";

const Movies = () => {
  return (
    <section>
      <div className="title">
        <h5>Featured Movie</h5>
        <div className="more">
          <p>See more</p>
          <img src={chevron} alt="chevron" />
        </div>
      </div>
      <div className="movie-list">
        <div className="movie-card">
          <div className="card-poster">
            <img
              src={card}
              alt="Movie poster"
              className="poster-img"
            />
          </div>
          <div className="movie-rating">
            <img src={series} alt="series" />
            <img src={fav} alt="fav" />
          </div>
          <div className="movie-rating-text">
            <p>USA, 2016 - Current</p>
            <p>Stranger Things</p>
          </div>
          <div className="imdb-rt">
            <div className="imdb-rating">
              <img src={imdb} alt="imdb" />
              <p>86.0 / 100</p>
            </div>
            <div className="rt-rating">
              <img src={rt} alt="rt" />
              <p>97%</p>
            </div>
          </div>
          <div className="genre">
            <p>Action, Adventure, Horror</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Movies;
