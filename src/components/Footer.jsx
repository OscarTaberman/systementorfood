
       import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-column">
          <h3>Systementor Education</h3>
          <p>Följ oss</p>
          <div className="socials">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Länkar</h4>
          <ul>
            <li><a href="#">Om oss</a></li>
            <li><a href="#">Jobba hos oss</a></li>
            <li><a href="#">Referenser</a></li>
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
