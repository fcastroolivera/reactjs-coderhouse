import './CartWidget.css';
import {useContext} from "react";
import {CartCtx} from "../../context/CartContext.jsx";

export default function CartWidget() {
    const {cart} = useContext(CartCtx)

    return (
        <button className={'cart-widget'}><i className="fa-solid fa-cart-shopping"></i>{cart.length}</button>
    )
}