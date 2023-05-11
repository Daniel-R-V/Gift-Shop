import "./categoriesJewelery.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function CategoriesJewelery() {
    const API_URL = "https://fakestoreapi.com/products/category/jewelery"
    const [jeweleryProducts, setJeweleryProducts] = useState([])

    useEffect(() => {
        const getJeweleryProducts = async () => {
            const response = await fetch(API_URL)
            const data = await response.json()
            setJeweleryProducts(data)
        }

        getJeweleryProducts()
    }, [])

    return (
        <>
            <div className="product-container">
                <div className="container">
                    <div className="products-grid">
                        {jeweleryProducts.map((product) => (
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

export default CategoriesJewelery
