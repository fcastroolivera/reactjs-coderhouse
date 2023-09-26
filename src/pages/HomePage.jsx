import ProductListContainer from "../components/ProductListContainer/ProductListContainer.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

export default function HomePage() {

    return (
        <>
            <Navbar/>

            <main className='container'>
                <h2>Todos nuestros productos</h2>
                <ProductListContainer>
                    <ProductList/>
                </ProductListContainer>
            </main>
        </>
    )
}