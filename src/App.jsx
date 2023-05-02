import "./App.css"
import Home from "../src/pages/Home"
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Categories from "./pages/Categories"
import All from "./components/Categories/All/All"
import Electronics from "./components/Categories/Electronics/Electronics"
import Men from "./components/Categories/Men/Men"
import Women from "./components/Categories/Women/Women"
import Jewelry from "./components/Categories/Jewelry/Jewelry"
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />

                <Route path="categories" element={<Categories />}>
                    <Route path="all" element={<All />} />
                    <Route path="all" element={<Electronics />} />
                    <Route path="all" element={<Men />} />
                    <Route path="all" element={<Women />} />
                    <Route path="all" element={<Jewelry />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
