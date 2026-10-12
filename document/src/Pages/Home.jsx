import { Link } from "react-router-dom";
import "../style/Home.css"
function Home() {
    return (
        <div className="home-menu">
            <div className="home-tech">
                <p>Fine Dining · Kozhikode · Est. 2015</p>
                <div className="menu-card">
                    <h1>Where every dish </h1>
                    <h1> tells <span>a story</span></h1>
                </div>
                <div className="home-para">
                    <p>Authentic cuisine crafted from the freshest local ingredients, slow-cooked with decades of tradition and a touch of modern refinement.</p>
                </div>
            </div>
            <div className="home-btn">
                <button>Reserve a table</button>
                <div className="btn2">
                    <button>Explore menu</button>
                </div>
            </div>
            <div className="fest">
                <div className="home-fest">
                    <h2>10+</h2>
                    <p>YEARS</p>
                </div>
                <div className="home-fest">
                    <h2>45K</h2>
                    <p>HAPPY DINERS</p>
                </div>
                <div className="home-fest">
                    <h2>4.9</h2>
                    <p>RATING</p>
                </div>
                <div className="home-fest">
                    <h2>8</h2>
                    <p>AWARDS</p>
                </div>
            </div>
        </div>
    )

}
export default Home