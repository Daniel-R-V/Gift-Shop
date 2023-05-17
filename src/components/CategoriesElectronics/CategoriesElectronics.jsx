import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./categoriesElectronics.css"

function CategoriesElectronics() {
    const API_URL = "https://fakestoreapi.com/products/category/electronics"
    const [electronicProducts, setElectronicProducts] = useState([])

    useEffect(() => {
        const getElectronicProducts = async () => {
            const response = await fetch(API_URL)
            const data = await response.json()
            setElectronicProducts(data)
        }
        getElectronicProducts()
    }, [])

    return (
        <>
            <div className="product-container">
                <div className="container">
                    <div className="products-grid">
                        {electronicProducts.map((product) => (
                            <div key={product.id} className="product normal">
                                <Link to={`/categories/product/${product.id}`}>
                                    <div className="product-header">
                                        <img className="product-image" src={product.image} alt="product1" />
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
