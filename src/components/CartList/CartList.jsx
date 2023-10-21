import './CartList.css'
import CartItem from "../CartItem/CartItem.jsx";

export default function CartList({cartList}) {
    return (
        <div className="cart-list">
            {
                cartList.map((el) => (
                    <CartItem key={el.id} item={el}/>
                ))
            }
        </div>
    )
}