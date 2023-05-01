import { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
// import { IoGift } from "react-icons/io5"
import logo from "../../images/logo.png"

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
                        <div className="logo-container">
                            <Link to="/">
                                {/* <IoGift className="logo" /> */}
                                <img src={logo} className="logo" />
                            </Link>
                        </div>
                        <div className="nav-links">
                            <Link onClick={scrollToTop} to="/categories/all">
                                Categories
                            </Link>
                            <Link onClick={scrollToTop} to="/about">
                                About
                            </Link>
                            <Link onClick={scrollToTop} to="/faq">
                                FAQ
                            </Link>
                        </div>
                        <div className="auth-container">
                            <span className="login">Login</span>
                            <span className="sign-up">Sign Up</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
