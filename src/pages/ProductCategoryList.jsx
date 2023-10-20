import ProductListContainer from "../components/ProductListContainer/ProductListContainer.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Layout from "../components/Layout/Layout.jsx";

export default function ProductCategoryList() {
    let { category } = useParams();

    return (
        <Layout>
            <h2>Productos de {category}</h2>
            <ProductListContainer/>
        </Layout>
    )
}