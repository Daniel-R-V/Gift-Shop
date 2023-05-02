import { Link } from "react-router-dom"
import products from "../images/products.png"
import electronics from "../images/electronics.png"
import jewelry from "../images/jewelry.png"
import "./home.css"

function Home() {
    return (
        <div className="home-container">
            <Link to="/categories/all">
                <img src={products} alt="all-products" className="image-products" />
            </Link>
            <div className="right-images">
                <Link to="categories/electronics">
                    <img src={electronics} alt="electronics" className="image-electronics" />
                </Link>
                <Link to="categories/jewelry">
                    <img src={jewelry} alt="jewelry" className="image-jewelry" />
                </Link>
            </div>
        </div>
    )
}

export default Home
