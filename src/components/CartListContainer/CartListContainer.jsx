import './CartListContainer.css';
import {useContext} from "react";
import {CartCtx} from "../../context/CartContext.jsx";
import CartList from "../CartList/CartList.jsx";
import {Link} from "react-router-dom";

export default function CartListContainer() {
    const {cart} = useContext(CartCtx)
    return (
        <div className="cartcontainer">
            <h2>Tu carrito:</h2>
            {
                cart.length > 0 ?
                    <>
                        <CartList cartList={cart}/>
                        <Link className={'checkoutBtn'} to={'/checkout'}>Finalizar compra</Link>
                    </>
                :
                    <>
                        <p>No tenés ítems en tu carrito.</p>
                    </>
            }

        </div>
    )
}