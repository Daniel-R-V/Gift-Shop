const API_URL = "https://fakestoreapi.com/products"

export async function getAllProducts() {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
