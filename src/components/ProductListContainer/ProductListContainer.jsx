import './ProductListContainer.css'
import ProductList from "../ProductList/ProductList.jsx";
import {useContext, useEffect, useState} from "react";
import {CartCtx} from "../../context/CartContext.jsx";
import {useParams} from "react-router-dom";

import {collection, getDocs, query, where} from "firebase/firestore"
import {firestore} from "../../firestore/firestore.js";

export default function ProductListContainer() {
    const { setIsLoading } = useContext(CartCtx)
    const [productList, setProductList] = useState([]);
    const { category} = useParams();

    useEffect(() => {
        setIsLoading(true);

        if (category) {
            const q = query(collection(firestore, "products"), where("category", "==", category));
            getDocs(q).then(snapshot => {
                setProductList(snapshot.docs.map(product => (
                    {id: product.id, ...product.data()}
                )))
                setIsLoading(false);
            })
        } else {
            const productsRef = collection(firestore, "products");
            getDocs(productsRef).then(res => {
                setProductList(res.docs.map(product => (
                    {id: product.id, ...product.data()}
                )))
                setIsLoading(false);
            })
        }

    }, [category]);

    return (
        <div className="productcontainer">
            <ProductList productList={productList}/>
        </div>
    )
}