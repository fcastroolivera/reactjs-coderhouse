import './AddToCart.css'
import {useContext} from "react";
import {CartCtx} from "../../context/CartContext.jsx";

export default function AddToCart({data}) {
    const { addToCart } = useContext(CartCtx)

    return (
        <button className={'atc'} onClick={() => addToCart(data)}>Añadir al carrito</button>
    )
}