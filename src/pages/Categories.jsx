import { Outlet } from "react-router"
import CategoriesHeader from "../components/CategoriesHeader/CategoriesHeader"

function Categories() {
    return (
        <>
            <CategoriesHeader />
            <Outlet />
        </>
    )
}

export default Categories
