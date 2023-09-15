import SideBar from "./SideBar";
import trailer from "../../assets/trailer.png";
const MovieDetails = () => {
  return (
    <main>
      <SideBar />
      <section>
        <div>
          <img src={trailer} alt="" />
        </div>
        <div className="movie-details">
          <div>
            <div className="overview">
              <p></p>
              <small></small>
              <small></small>
            </div>
            <div>
              <p></p>
            </div>
            <div className="crew">
              <p></p>
              <p></p>
              <p></p>
            </div>
            <div className="awards">
              <p></p>
              <p></p>
              <img src="s" alt="" />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
};
export default MovieDetails;
