import "./categoriesWomen.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function CategoriesWomen() {
    const API_URL = "https://fakestoreapi.com/products/category/women's clothing"
    const [womenProducts, setWomenProducts] = useState([])

    useEffect(() => {
        const getWomenProducts = async () => {
            const response = await fetch(API_URL)
            const data = await response.json()
            setWomenProducts(data)
        }

        getWomenProducts()
    }, [])

    return (
        <>
            <div className="product-container">
                <div className="container">
                    <div className="products-grid">
                        {womenProducts.map((product) => (
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

export default CategoriesWomen
