import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail.jsx";

import {firestore} from "../../firestore/firestore.js";
import {doc, getDoc} from "firebase/firestore"
import {CartCtx} from "../../context/CartContext.jsx";

export default function ProductDetailContainer() {
    const {setIsLoading} = useContext(CartCtx);
    const {productId} = useParams();
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        setIsLoading(true)

        const productRef = doc(firestore, "products", "IKKIgt8vLq5FiQQoKB81");

        getDoc(productRef).then(res => {
            if (res.exists()) {
                setProductInfo({ id: res.id, ...res.data()});
            } else {
                console.log('producto no existe')
            }
        })

        setIsLoading(false);
    }, [productId]);

    return (
        <ProductDetail params={productInfo}/>
    )
}