import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../pages/ProductPage"
import CartProduct from "../CartProduct/CartProduct"
import EmptyCart from "../EmptyCart/EmptyCart"
import "./cartWithProducts.css"

function CartWithProducts() {
    const { cartProduct, setCartProduct } = useContext(CartContext)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newTotalPrice = cartProduct.reduce((acc, item) => acc + item.price, 0)
        setTotalPrice(newTotalPrice)
    }, [cartProduct])

    return (
        <>
            <div className="full-cart-div">
                <div className="full-cart">{cartProduct.map((item, id) => (cartProduct.length !== 0 ? <CartProduct key={id} item={item} setCartProduct={setCartProduct} /> : <EmptyCart key={id} />))}</div>
            </div>
            <div className="subtotal-div">
                <div className="sub-right">
                    <p>Subtotal</p>
                    <p className="total-price">{totalPrice + ".00$"}</p>
                </div>
                <div className="sub-left">
                    <Link>Go to Checkout</Link>
                </div>
            </div>
        </>
    )
}

export default CartWithProducts
