import chevron from "../assets/Chevron right.svg";
import card from "../assets/Poster Image.png";
import fav from "../assets/Favorite.png";
import series from "../assets/TV Series.png";
import imdb from "../assets/imdb.png";
import rt from "../assets/rottentom.png";
import fetchMovies from "./fetchMovies";

const Movies = () => {
  const { loading, movies } = fetchMovies();
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
        {movies.map((movie) => {
          const { title, date, img, id, vote, popular, lang } = movie;

          return (
            <>
              <div
                className="movie-card"
                key={id}
                data-testid="movie-card"
              >
                <div
                  className="card-poster"
                  data-testid="movie-poster"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${img}`}
                    alt={title}
                  />
                </div>
                <div className="movie-rating">
                  {/* <img src={series} alt="series" /> */}
                  <img src={fav} alt="fav" />
                </div>
                <div className="movie-rating-text">
                  <p data-testid="movie-release-date">
                    {lang}, {date} - Current
                  </p>
                  <p data-testid="movie-title">{title}</p>
                </div>
                <div className="imdb-rt">
                  <div className="imdb-rating">
                    <img src={imdb} alt="imdb" />
                    <p>{vote} / 100</p>
                  </div>
                  <div className="rt-rating">
                    <img src={rt} alt="rt" />
                    <p>{popular}%</p>
                  </div>
                </div>
                <div className="genre">
                  <p>Action, Adventure, Horror</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default Movies;
