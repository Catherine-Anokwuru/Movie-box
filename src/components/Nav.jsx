import logo from "../assets/tv.png";
import accordion from "../assets/Menu.png";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" className="nav-img" />
        <p className="nav-text">MovieBox</p>
      </div>
      <div className="search">
        <form action="#">
          <input
            className="search-input"
            type="text"
            placeholder="What do you want to watch?"
          />
          <FaSearch />
        </form>
      </div>
      <div className="menu">
        <p>Sign in</p>
        <img src={accordion} alt="" />
      </div>
    </nav>
  );
};
export default Nav;
