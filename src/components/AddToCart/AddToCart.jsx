import './AddToCart.css'
import {useContext} from "react";
import {CartCtx} from "../../context/CartContext.jsx";

export default function AddToCart({id}) {
    const { addToCart } = useContext(CartCtx)

    return (
        <button className={'atc'} onClick={() => addToCart(id)}>Añadir al carrito</button>
    )
}