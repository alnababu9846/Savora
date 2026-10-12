import { Link } from "react-router-dom";
import "../style/Footer.css"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* SAVORIA */}

        <div className="footer-brand">

          <h2>Savoria</h2>

          <p>
            Fine dining in the heart of Kozhikode since 2015.
            Where every meal is a memory worth keeping.
          </p>

        </div>


        {/* NAVIGATE */}

        <div className="footer-column">

          <h3>NAVIGATE</h3>

          <Link to="/">Home</Link>

          <Link to="/menu">Menu</Link>

          <Link to="/about">About Us</Link>

          <Link to="/contact">Reservations</Link>

        </div>


        {/* EXPLORE */}

        <div className="footer-column">

          <h3>EXPLORE</h3>

          <Link to="/private-dining">
            Private Dining
          </Link>

          <Link to="/events">
            Events
          </Link>

          <Link to="/blog">
            Blog
          </Link>

          <Link to="/careers">
            Careers
          </Link>

        </div>


        {/* CONNECT */}

        <div className="footer-column">

          <h3>CONNECT</h3>

          <a href="#instagram">
            Instagram
          </a>

          <a href="#facebook">
            Facebook
          </a>

          <a href="#zomato">
            Zomato
          </a>

          <a href="#tripadvisor">
            TripAdvisor
          </a>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="footer-bottom">

        <p>
          © 2026 Savoria. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;