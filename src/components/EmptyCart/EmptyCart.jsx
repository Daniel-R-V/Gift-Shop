import "./emptyCart.css"

function EmptyCart({ openCart }) {
    return (
        <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={openCart}>Keep Browsing</button>
        </div>
    )
}

export default EmptyCart
