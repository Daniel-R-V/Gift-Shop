import "./categoriesProduct.css"
import { useEffect, useState } from "react"
import { getAllProducts } from "../../api/getAllProducts"
import { Link } from "react-router-dom"

function CategoriesProduct() {
    const [products, setProducts] = useState([])

    console.log("Hello Dani!")

    useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response)
        })
    }, [products])

    return (
        <>
            <div className="categoriesProduct-container">
                <div className="container">
                    <div className="products-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product">
                                <Link onClick={() => window.top(0, 0)} to={`/categories/product/${product.id}`}>
                                    <div className="product-header">
                                        <img src={product.image} alt="product1" />
                                    </div>
                                    <div className="product-details">
                                        <p>{product.title}</p>
                                        <p className="product-price">{product.price}$</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesProduct
