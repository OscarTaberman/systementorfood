import "./Footer.css";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Systementor Education</h3>
          <p>Följ oss</p>
          <div className="socials">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Länkar</h4>
          <ul>
            <li>
              <a href="#">Om oss</a>
            </li>
            <li>
              <a href="#">Jobba hos oss</a>
            </li>
            <li>
              <a href="#">Referenser</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Kontakt</h4>
          <p>08-234-567</p>
          <p>info@systementor.se</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Systementor Education</p>
      </div>
    </footer>
  );
}

export default Footer;
