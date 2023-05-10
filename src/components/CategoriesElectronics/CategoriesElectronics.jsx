import { useState, useEffect } from "react"
import "./categoriesElectronics.css"
import { getAllProducts } from "../../api/getAllProducts"
import { Link } from "react-router-dom"

function CategoriesElectronics() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts().then((response) => setProducts(response))
    }, [])

    const filteredProducts = products.filter((product) => product.category === "electronics")

    return (
        <>
            <div className="product-container">
                <div className="container">
                    <div className="products-grid">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="product normal">
                                <Link to={`/categories/product/${product.id}`}>
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

export default CategoriesElectronics
