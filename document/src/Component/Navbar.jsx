import { Link } from "react-router-dom";
import "../style/Navbar.css"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                S
                <span>avoria</span>
            </div>
            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="btn">
              <Link to="/contact">Contact us</Link>
            </div>
        </nav>
    )
}
export default Navbar