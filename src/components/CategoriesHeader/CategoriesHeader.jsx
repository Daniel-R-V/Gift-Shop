import "./categoriesHeader.css"
import { useState } from "react"
import { Link } from "react-router-dom"

function CategoriesHeader() {
    const [btnName, setBtnName] = useState("All")

    const handleBtnName = (e) => {
        setBtnName(e)
    }
    return (
        <>
            <div className="container">
                <div className="catego-header">
                    <div className="title-home">
                        <Link className="home" onClick={() => window.scrollTo(0, 0)} to="/">
                            <i className="fa-solid fa-angle-left"></i> Home
                        </Link>
                        <h3>{btnName}</h3>
                    </div>
                    <div className="filter-btns">
                        <Link to="all" onClick={() => handleBtnName("all")}>
                            <button>All</button>
                        </Link>
                        <Link to="electronics">
                            <button onClick={() => handleBtnName("electronics")}>Electronics</button>
                        </Link>
                        <Link to="women">
                            <button onClick={() => handleBtnName("women")}>Women</button>
                        </Link>
                        <Link to="men">
                            <button onClick={() => handleBtnName("men")}>Men</button>
                        </Link>
                        <Link to="jewelry">
                            <button onClick={() => handleBtnName("jewelry")}>Jewelry</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesHeader
