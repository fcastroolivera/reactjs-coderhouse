import ProductListContainer from "../components/ProductListContainer/ProductListContainer.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Layout from "../components/Layout/Layout.jsx";

export default function HomePage() {
    return (
        <Layout>
            <h2>Todos nuestros productos</h2>
            <ProductListContainer/>
        </Layout>
    )
}