import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import ProductCategoryList from "../pages/ProductCategoryList.jsx";
import CategoryListPage from "../pages/CategoryListPage.jsx";
import CartPage from "../pages/CartPage.jsx";

export default function Navigation() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <HomePage/>
        }, {
            path: '/product/:productId',
            element: <ProductDetailPage/>
        }, {
            path: '/category/:category',
            element: <ProductCategoryList/>
        }, {
            path: '/categories',
            element: <CategoryListPage/>
        }, {
            path: '/cart',
            element: <CartPage/>
        }
    ])

    return (<RouterProvider router={routes}/>)
}