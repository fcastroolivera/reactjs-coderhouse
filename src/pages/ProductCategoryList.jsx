import ProductListContainer from "../components/ProductListContainer/ProductListContainer.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function ProductCategoryList() {
    let { categoryId } = useParams();

    const [categoryInfo, setCategoryInfo] = useState([]);

    const getCategories = fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}`)
        .then(res => res.json())
        .finally(res => {
            return res;
        });


    useEffect(() => {
        getCategories.then(data => {
            setCategoryInfo(data);
        })
    }, []);

    return (
        <>
            <Navbar/>
            <main className='container'>
                <h2>Productos de {categoryId}</h2>
                <ProductListContainer />
            </main>
        </>
    )
}