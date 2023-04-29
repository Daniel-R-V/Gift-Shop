import { useState } from "react"
import { Link } from "react-router-dom"
import logo2 from "../../images/logo2.jpg"
import "./navbar.css"

function Navbar() {
    const [sticky, setSticky] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    window.addEventListener("scroll", handleScroll)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className={`nav-container ${sticky ? "nav-sticky" : ""}`}>
                        <Link to="/">
                            <img onClick={scrollToTop} src={logo2} alt="logo gift shop" className="logo" />
                        </Link>
                        <div className="nav-links">
                            <Link onClick={scrollToTop} to="/products">
                                Products
                            </Link>
                            <Link onClick={scrollToTop} to="/about">
                                About
                            </Link>
                            <Link onClick={scrollToTop} to="/faq">
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
