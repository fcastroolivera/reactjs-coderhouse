import './ProductList.css'
import Product from "../Product/Product.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function ProductList({productList}) {
    return (
        <div className="product-list">
            {
                productList.length > 0 ?
                productList.map((el, i) => (
                    <Product key={i} data={el} />
                ))
                    : <p>No hay productos con esos parámetros.</p>
            }
        </div>
    )
}