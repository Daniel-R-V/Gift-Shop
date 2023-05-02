import { useEffect, useState } from "react"
import { getAllProducts } from "../../api/getAllProducts"

function UnderFifty() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts().then((response) => {
            setProducts(response)
        })
    }, [])

    const underFiftyProducts = products.filter((product) => product.price < 50)
    console.log(underFiftyProducts)
}

export default UnderFifty
