import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../pages/ProductPage"
import "./cartProduct.css"

function CartProduct() {
    const [quantity, setQuantity] = useState(1)
    const { cartProduct, setCartProduct } = useContext(CartContext)

    const increase = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1)
        }
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const calcPrice = (quantity, item) => {
        return quantity * item
    }

    const [deleteProduct, setDeleteProduct] = useState(cartProduct)

    const removeFromCart = (id) => {
        const updateCart = cartProduct.filter((product) => product.id !== id)
        setDeleteProduct(updateCart)
        const json = JSON.stringify(cartProduct.id)
        localStorage.removeItem("cartItem", json)
    }

    useEffect(() => {
        setCartProduct(deleteProduct)
    }, [deleteProduct, setCartProduct])

    return (
        <>
            {cartProduct.map((product, id) => (
                <div key={id} className="cart-item">
                    <div className="cart-img">
                        <img src={product.img} alt="product" />
                    </div>
                    <div className="cart-middle">
                        <p className="cart-name">{product.description}</p>
                        <div className="cart-btns">
                            <button onClick={decrease}>-</button>
                            <p className="quantity">{quantity}</p>
                            <button onClick={increase}>+</button>
                        </div>
                    </div>
                    <div className="cart-right">
                        <p className="cart-price">{calcPrice(quantity, product.price)}.00$</p>
                        <i onClick={() => removeFromCart(product.id)} className="fa-sharp fa-solid fa-xmark"></i>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CartProduct
