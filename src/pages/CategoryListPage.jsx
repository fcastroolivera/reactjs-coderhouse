import ProductListContainer from "../components/ProductListContainer/ProductListContainer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import CategoryList from "../components/CategoryList/CategoryList.jsx";

export default function CategoryListPage() {
    return (
        <>
            <Navbar/>
            <main className='container'>
                <h2>Nuestras categorías</h2>
                <ProductListContainer>
                    <CategoryList />
                </ProductListContainer>
            </main>
        </>
    )
}