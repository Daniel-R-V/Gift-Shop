import "./App.css"
import { Home } from "./components/Home/Home"
import { NavBar } from "./components/NavBar/NavBar"
import { Footer } from "./components/Footer/Footer"

function App() {
    return (
        <div className="app-container">
            <NavBar />
            <Home />
            <Footer />
        </div>
    )
}

export default App
