import logo from "../../assets/tv.png";
import home from "../../assets/Home.png";
import movies from "../../assets/Movie Projector.png";
import series from "../../assets/TV Show.png";
import upcoming from "../../assets/Calendar.png";
import logout from "../../assets/Logout.png";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <div className="side">
        <div className="sidebar-logo">
          <img src={logo} alt="logo icon" />
          <p>MovieBox</p>
        </div>
        <div className="sidebar-menu">
          <div className="s-menu">
            <img src={home} alt="Home" />
            <p>Home</p>
          </div>
          <div className="s-menu">
            <img src={movies} alt="movies" />
            <p>Movies</p>
          </div>
          <div className="s-menu">
            <img src={series} alt="TV series" />
            <p>TV Series</p>
          </div>
          <div className="s-menu">
            <img src={upcoming} alt="Upcoming" />
            <p>Upcoming</p>
          </div>
        </div>
        {/* <div className="quiz">
          <p>Play movie quizes and earn free tickets</p>
          <small>50k people are playing now</small>
          <div>
            <small>Start playing</small>
          </div>
        </div> */}
        <div className="logout">
          <img src={logout} alt="Logout" />
          <p>Log out</p>
        </div>
      </div>
    </nav>
  );
};
export default SideBar;
