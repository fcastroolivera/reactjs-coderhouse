import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ProductDetail from "../components/ProductDetail/ProductDetail.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

export default function ProductDetailPage() {
    const {productId} = useParams();
    const [productInfo, setProductInfo] = useState({});

    const getProduct = fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())

    useEffect(() => {
        getProduct.then(data => {
            setProductInfo(data);
        })
    }, []);

    return (
        <>
            <Navbar/>
            <div className="container">
                <ProductDetail params={productInfo}/>
            </div>
        </>
    )
}