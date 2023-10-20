import Navbar from "../components/Navbar/Navbar.jsx";
import ProductDetailContainer from "../components/ProductDetailContainer/ProductDetailContainer.jsx";

export default function ProductDetailPage() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <ProductDetailContainer />
            </div>
        </>
    )
}