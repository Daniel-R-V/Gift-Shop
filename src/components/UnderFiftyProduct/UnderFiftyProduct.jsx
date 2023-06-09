import { useEffect, useState } from "react"
import { getAllProducts } from "../../api/getAllProducts"
import { Link } from "react-router-dom"
import "./underFiftyProduct.css"

function UnderFiftyProduct() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response)
        })
    }, [])

    const underFiftyProducts = products.filter((product) => product.price < 50)
    const underFiftyProductsSorted = underFiftyProducts.sort(() => Math.random() - 0.5)

    return (
        <>
            {underFiftyProductsSorted.map((product) => (
                <div key={product.id} className="underFiftyProducts-container">
                    <Link onClick={() => window.top(0, 0)} to={`/categories/product/${product.id}`}>
                        <div className="product-header">
                            <img className="product-image" src={product.image} alt={`image product ${product.id}`} />
                        </div>
                        <div className="product-details">
                            <p className="product-title">{product.title}</p>
                            <p className="product-price">{product.price}$</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default UnderFiftyProduct
