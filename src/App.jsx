import "./App.css"
import Home from "./components/Home/Home.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default App
