import fav from "../assets/Favorite.png";
import imdb from "../assets/imdb.png";
import rt from "../assets/rottentom.png";
import fetchMovies from "./fetchMovies";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Movies = () => {
  const { loading, movies, currentPage, setCurrentPage } =
    fetchMovies();

  const nextPage = () => {
    if (currentPage < 20) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 20) {
      setCurrentPage(20);
    }
    // localStorage.setItem("page", currentPage);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (currentPage === 20) {
      setCurrentPage(1);
    }
    // localStorage.setItem("page", currentPage);
  };

  return (
    <section>
      <div className="title">
        <h5>Featured Movie</h5>
        {/* <div className="more">
          <p>See more</p>
          <img src={chevron} alt="chevron" />
        </div> */}
      </div>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => {
            const { title, date, img, id, vote, popular, lang } =
              movie;

            return (
              <Link
                key={id}
                to={`/${id}`}
                onClick={() => {
                  localStorage.setItem("id", id);
                }}
              >
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
                  {/* <div className="genre">
                    <p>Action, Adventure, Horror</p>
                  </div> */}
                </div>
              </Link>
            );
          })}
        </div>
      )}
      <div className="page">
        <div
          onClick={prevPage}
          disabled={currentPage === 1}
          style={{
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
            color: currentPage === 1 && "gray",
          }}
        >
          <p
            style={{
              display: "inline-block",
              paddingRight: "1rem",
              fontWeight: 600,
            }}
          >
            Prev
          </p>
          <FaArrowLeft />
        </div>
        <div
          onClick={nextPage}
          disabled={currentPage === 20}
          style={{
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
            color: currentPage === 20 && "gray",
          }}
        >
          <FaArrowRight />
          <p
            style={{
              display: "inline-block",
              paddingLeft: "1rem",
              fontWeight: 600,
            }}
          >
            Next
          </p>
        </div>
      </div>
      <p className="page-text">Page {currentPage} of 20</p>
    </section>
  );
};
export default Movies;
