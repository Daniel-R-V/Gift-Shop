import "./App.css"
import Home from "../src/pages/Home"
import Navbar from "./components/Navbar/Navbar.jsx"
import Categories from "./pages/Categories"
import All from "./components/Categories/All/All"
import Electronics from "./components/Categories/Electronics/Electronics"
import Men from "./components/Categories/Men/Men"
import Women from "./components/Categories/Women/Women"
import Jewelery from "./components/Categories/Jewelery/Jewelery"
import { Route, Routes } from "react-router-dom"
import ProductPage, { CartContext } from "./pages/ProductPage"
import { useEffect, useState } from "react"

function App() {
    const [cartProduct, setCartProduct] = useState([])

    console.log("hello dani")

    const addToCart = (product) => {
        setCartProduct([...cartProduct, product])
    }

    useEffect(() => {
        const valueLocalStorage = localStorage.getItem("cartProduct")
        const savedCart = JSON.parse(valueLocalStorage)
        if (savedCart) {
            setCartProduct(savedCart)
        }
    }, [])

    useEffect(() => {
        const json = JSON.stringify(cartProduct)
        localStorage.setItem("cartProduct", json)
    }, [cartProduct])

    return (
        <CartContext.Provider value={{ cartProduct, setCartProduct, addToCart }} className="app-container">
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />

                <Route path="categories" element={<Categories />}>
                    <Route path="all" element={<All />} />
                    <Route path="electronics" element={<Electronics />} />
                    <Route path="men" element={<Men />} />
                    <Route path="women" element={<Women />} />
                    <Route path="jewelery" element={<Jewelery />} />
                </Route>
                <Route path="categories/product/:id" element={<ProductPage />} />
            </Routes>
        </CartContext.Provider>
    )
}

export default App
