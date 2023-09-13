import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <div className="footer">
        <div className="social">
          <FaFacebook
            style={{ width: "1.5rem", height: "1.71431rem" }}
          />
          <FaInstagram
            style={{ width: "1.5rem", height: "1.71431rem" }}
          />
          <FaTwitter style={{ width: "1.5rem", height: "1.5rem" }} />
          <FaYoutube
            style={{ width: "1.5rem", height: "1.33331rem" }}
          />
        </div>
        <div className="links">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <p className="copyright">
          © 2021 MovieBox by Adriana Eka Prayudha{" "}
        </p>
      </div>
    </section>
  );
};
export default Footer;
