import './CartWidget.css';
import {useContext} from "react";
import {CartCtx} from "../../context/CartContext.jsx";
import {Link} from "react-router-dom";

export default function CartWidget() {
    const {cart} = useContext(CartCtx)

    return (
        <Link to={'/cart'} className={'cart-widget'}><i className="fa-solid fa-cart-shopping"></i>{cart.length}</Link>
    )
}