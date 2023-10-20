import './ProductListContainer.css'
import ProductList from "../ProductList/ProductList.jsx";
import {useContext, useEffect, useState} from "react";
import {CartCtx} from "../../context/CartContext.jsx";
import {useParams} from "react-router-dom";

import {collection, getDocs} from "firebase/firestore"
import {firestore} from "../../firestore/firestore.js";

export default function ProductListContainer({ children }) {
    const {setIsLoading} = useContext(CartCtx)
    const [productList, setProductList] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        setIsLoading(true);

        const productsRef = collection(firestore, "products");
        getDocs(productsRef).then(res => {
            console.log('asd')
        })

    }, [categoryId]);

    return (
        <div className="productcontainer">
            <ProductList productList={productList}/>
        </div>
    )
}