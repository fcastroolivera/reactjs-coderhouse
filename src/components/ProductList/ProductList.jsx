import './ProductList.css'
import Product from "../Product/Product.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function ProductList() {
    let { categoryId } = useParams();

    const requestUrl = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : 'https://fakestoreapi.com/products';

    const [productList, setProductList] = useState([]);

    const getProduct = fetch(requestUrl)
        .then(res => res.json());


    useEffect(() => {
        getProduct.then(data => {
            setProductList(data);
        })
    }, []);

    return (
        <div className="product-list">
            {
                productList.map((el, i) => (
                    <Product key={i} data={el} />
                ))
            }
        </div>
    )
}