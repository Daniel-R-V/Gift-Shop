import "../components/productPage.css"
import UnderFiftySlider from "../components/UnderFiftySlider/UnderFiftySlider"
import Footer from "../components/Footer/Footer"
import { useParams } from "react-router"
import { useEffect, useState, createContext, useContext } from "react"

export const CartContext = createContext()

function ProductPage() {
    const { id } = useParams()
    const API_URL = `https://fakestoreapi.com/products/${parseInt(id)}`
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [notify, setNotify] = useState(false)

    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(API_URL)
            const data = await response.json()
            setProduct(data)
        }
        getProduct()
    }, [API_URL])

    const increaseQuantity = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1)
        }
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const calculatePrice = () => {
        return quantity * product.price
    }

    const showNotify = () => {
        setNotify(!notify)
    }

    return (
        <>
            <div onAnimationEnd={() => setNotify(false)} className={`notify ${notify ? "slide-in" : ""}`}>
                <p>Item has been added to the Cart! 🎉</p>
            </div>

            <div className="product-page-div">
                <div className="container">
                    <div className="product-div">
                        <h3 className="product-big-name">{product.title}</h3>
                        <div className="product-left">
                            <div className="big-img">
                                <img src={product.image} alt="product" />
                            </div>
                        </div>
                        <div className="product-right">
                            <p className="product-spec">{product.description}</p>
                            <div className="product-quant">
                                <p className="quantity-title">Quantity</p>
                                <div className="product-btns">
                                    <button className="buttons-quantity" onClick={decreaseQuantity}>
                                        -
                                    </button>
                                    <p className="quantity">{quantity}</p>
                                    <button className="buttons-quantity" onClick={increaseQuantity}>
                                        +
                                    </button>
                                </div>
                                <p className="product-price">{calculatePrice()}$</p>
                            </div>
                            <div className="atc-buy">
                                <button
                                    onClick={() => {
                                        addToCart(product)
                                        showNotify()
                                    }}
                                    className="atc-btn"
                                >
                                    add to cart
                                </button>
                                <button
                                    onClick={() => {
                                        addToCart(product)
                                        showNotify()
                                    }}
                                    className="buy-btn"
                                >
                                    buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <UnderFiftySlider />
                <Footer />
            </div>
        </>
    )
}

export default ProductPage
