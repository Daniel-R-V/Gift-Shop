import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import logo from "../../images/logo.png"
import { CartContext } from "../../pages/ProductPage"
import EmptyCart from "../EmptyCart/EmptyCart"
import CartWithProducts from "../CartWithProducts/CartWithProducts"
import { FaShoppingCart } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"

function Navbar() {
    const [sticky, setSticky] = useState(false)
    const [cart, setCart] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)

    const { cartProduct } = useContext(CartContext)

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    const openCart = () => {
        setCart(!cart)
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
            <div className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}>
                {/* <i onClick={() => setMobileNav(!mobileNav)} className="fa-sharp fa-solid fa-xmark"></i> */}
                <RxHamburgerMenu onClick={() => setMobileNav(!mobileNav)} />
                <div className="mobile-links">
                    <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/all">
                        Categories
                    </Link>
                    <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/electronics">
                        Electronics
                    </Link>
                    <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/jewelery">
                        Jewelery
                    </Link>
                </div>
            </div>

            <div onClick={openCart} className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}></div>

            <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
                <div className="cart-title-btn">
                    <h2 className="cart-full-h2">Your Shopping Cart ({cartProduct.length})</h2>
                    <FaShoppingCart onClick={openCart} />
                </div>

                <div className="cart-body">{cartProduct.length < 1 ? <EmptyCart openCart={openCart} /> : <CartWithProducts />}</div>
            </div>

            <nav className="navbar">
                <div className="container">
                    <div className={`nav-container ${sticky ? "nav-sticky" : ""}`}>
                        <div className="logo-container">
                            <Link to="/">
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
                        <FaShoppingCart data-array-length={cartProduct.length} className={cartProduct.length < 1 ? "cart-icon" : "cart-icon with-items"} onClick={openCart} />

                        <div className="hamburger-menu">
                            <FaShoppingCart data-array-length={cartProduct.length} className={`fa-solid fa-cart-shopping hamburger-cart ${cartProduct.length < 1 ? "cart-icon" : "cart-icon with-items"}`} onClick={openCart} />
                            <RxHamburgerMenu onClick={() => setMobileNav(!mobileNav)} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
