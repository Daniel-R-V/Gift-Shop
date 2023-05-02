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
            <div className="underFifty-container">
                <div className="title-btns">
                    <h3>Products under $50</h3>
                    <div className="btns">
                        {/* <button title="scroll left" onClick={slideLeft}> */}
                        <BsFillArrowLeftSquareFill title="scroll left" onClick={slideLeft} />
                        {/* </button> */}
                        {/* <button title="scroll right" onClick={slideRight}> */}
                        <BsFillArrowRightSquareFill title="scroll right" onClick={slideRight} />
                        {/* </button> */}
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
