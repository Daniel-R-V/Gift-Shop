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
import ProductPage from "./pages/ProductPage"

function App() {
    return (
        <div className="app-container">
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
        </div>
    )
}

export default App
