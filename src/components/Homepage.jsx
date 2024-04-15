import Nav from "./Nav";
import imdb from '../assets/imdb.png'
import rt from '../assets/rottentom.png'
import play from '../assets/Play.svg'
import rect from '../assets/Rectangle 1.png'
import Footer from "./Footer";
import Movies from "./Movies";
const Homepage = () => {
  return (
    <>
    <div className="landing">
      <Nav />
      <section className="hero">
        <div className="hero-info">
          <p>John Wick 3 : Parabellum</p>
          <div className="ratings">
            <div className="imdb">
              <img src={imdb} alt="IMDB" />
              <span>86.0 / 100</span>
            </div>
            <div className="rt">
              <img src={rt} alt="Rotten Tomatoes" />
              <span>97%</span>
            </div>
          </div>
          <div className="hero-text">
            John Wick is on the run after killing a member of the
            international assassins' guild, and with a $14 million
            price tag on his head, he is the target of hit men and
            women everywhere.
          </div>
          <button className="trailer">
            <img src={play} alt="watch trailer" />
            <p>Watch trailer</p>
          </button>
        </div>
        {/* <div className="pagination-box">
          <img src={rect} alt="rectangle" className="rect" />

          <div className="pagination">
            <p>1</p>
            <p>2</p>
            <p style={{color: 'white', fontSize: '1rem'}}>3</p>
            <p>4</p>
            <p>5</p>
          </div>
        </div> */}
      </section>
    </div>
     <Movies />
      <Footer />
      {/* <MovieDetails/> */}

    </>
  );
};
export default Homepage;
