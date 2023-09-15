import SideBar from "./SideBar";
import trailer from "../../assets/trailer.png";
import down from "../../assets/chevron down.png";
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
              <p>Top Gun: Maverick • 2022 • PG-13 • 2h 10m</p>
              <small>Action</small>
              <small>Drama</small>
            </div>
            <div>
              <p>
                After thirty years, Maverick is still pushing the
                envelope as a top naval aviator, but must confront
                ghosts of his past when he leads TOP GUN's elite
                graduates on a mission that demands the ultimate
                sacrifice from those chosen to fly it.
              </p>
            </div>
            <div className="crew">
              <p>Director : Joseph Kosinski</p>
              <p>Writers : Jim Cash, Jack Epps Jr, Peter Craig</p>
              <p>
                Stars : Tom Cruise, Jennifer Connelly, Miles Teller
              </p>
            </div>
            <div className="awards">
              <p>Top rated movie #65</p>
              <p>Awards 9 nominations</p>
              <img src={down} alt="chevron down" />
            </div>
          </div>
          <div className="right-tab">

          <div className="bookmark-icons">

          </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MovieDetails;
