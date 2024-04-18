import SideBar from "./SideBar";
import down from "../../assets/chevron down.png";
import fetchMovieDetails from "./fetchMovieDetails";
import ReactPlayer from "react-player";

const MovieDetails = () => {
  const id = localStorage.getItem("id");
  const { movieDetails, loading, trailerKey, people } =
    fetchMovieDetails(id);

  if (loading) {
    return <div className="loading"></div>;
  }

  const { writers, director, cast } = people;
  const writerNames = () => {
    const writer = writers.map((data) => data.name);
    return writer.join(" , ");
  };
  const names = writerNames();

  const actors = cast?.join(" , ");

  const { title, overview, runtime, release_date, genres, adult } =
    movieDetails;
  const h = (runtime / 60).toFixed(0);
  const min = runtime % 60;
  const date = release_date?.slice(0, 4);

  return (
    <main className="main-details">
      <SideBar />
      <section className="details-section">
        {trailerKey && (
          <div
            className="video-player"
            style={{ borderRadius: "20px" }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailerKey}`}
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "20px" }}
              controls
            />
          </div>
        )}
        <div className="movie-details">
          <div>
            <div className="overview">
              <p>
                {title} • {date} • {adult ? "PG-18" : "PG-13"} •{" "}
                {`${h}hr ${min}min`}
              </p>
              <div className="small">
                {genres?.map((item, index) => {
                  return <small key={index}>{item.name}</small>;
                })}
              </div>
            </div>
            <div className="overview-text">
              <p>{overview}</p>
            </div>
            <div className="crew">
              <p>
                Director :&nbsp;<span> {director.name}</span>
              </p>
              <p>
                Writers :&nbsp;<span>{names}</span>
              </p>
              <p>
                Stars :&nbsp;<span>{actors}</span>
              </p>
            </div>
            {/* <div className="awards">
              <div>
                <p>Top rated movie #65</p>
                <p>Awards 9 nominations</p>
              </div>
              <img src={down} alt="chevron down" />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
