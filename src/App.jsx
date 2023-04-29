import "./App.css"
import Home from "./components/Home/Home.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
