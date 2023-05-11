import { Link } from "react-router-dom"
import products from "../images/products.png"
import electronics from "../images/electronics.png"
import jewelry from "../images/jewelry.png"
import "./home.css"
import UnderFiftySlider from "../components/UnderFiftySlider/UnderFiftySlider"
import Banner from "../components/Banner/Banner"
import moda from "../images/moda.jpg"

function Home() {
    return (
        <>
            <div className="home-container">
                <Link to="/categories/all">
                    <img src={products} alt="all-products" className="image-products" />
                </Link>
                <div className="right-images">
                    <Link to="categories/electronics">
                        <img src={electronics} alt="electronics" className="image-electronics" />
                    </Link>
                    <Link to="categories/jewelery">
                        <img src={jewelry} alt="jewelery" className="image-jewelry" />
                    </Link>
                </div>
            </div>
            <UnderFiftySlider />
            <Banner
                title="Discover Your Unique Style"
                text="Our collection of high-quality clothing and accessories is designed to help you express your unique style. Discover the latest trends and timeless classics, and create a wardrobe that's truly you. Shop now and unleash your style."
                img={moda}
            />
        </>
    )
}

export default Home
