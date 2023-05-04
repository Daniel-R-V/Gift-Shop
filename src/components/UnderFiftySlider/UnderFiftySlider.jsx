import UnderFiftyProduct from "../UnderFiftyProduct/UnderFiftyProduct"
import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import { BsFillArrowRightSquareFill } from "react-icons/bs"
import "./underFiftySlider.css"

function UnderFiftySlider() {
    const slideLeft = () => {
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 235
    }

    const slideRight = () => {
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 235
    }

    return (
        <div className="underFifty">
            <div className="container">
                <div className="title-btns">
                    <h3>Products under $50</h3>
                    <div className="btns-container">
                        <BsFillArrowLeftSquareFill title="scroll left" onClick={slideLeft} className="btns" />
                        <BsFillArrowRightSquareFill title="scroll right" onClick={slideRight} className="btns" />
                    </div>
                </div>
                <div className="row-container" id="slider">
                    <UnderFiftyProduct />
                </div>
            </div>
        </div>
    )
}

export default UnderFiftySlider
