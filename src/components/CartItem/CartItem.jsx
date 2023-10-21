import './CartItem.css';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartCtx} from "../../context/CartContext.jsx";

export default function CartItem({item}) {
    const {removeItem, changeAmount} = useContext(CartCtx);
    const {id, name, price, image, amount, stock} = item;

    const changeQuantity = (op) => {
        if (op === '-') {
            if (amount > 1) {
                changeAmount(id, amount - 1);
            } else {
                removeItem(id);
            }
        } else {
            if (amount < stock) {
                changeAmount(id, amount + 1)
            }
        }
    }

    return (
        <div className={'cart-item'}>
            <div className="img">
                <img src={image} alt={`Image for Product ${name}`}/>
            </div>
            <div className="info">
                <Link to={`/product/${id}`}><h3>{name}</h3></Link>
                <div className="numbers">
                    <div className="price">
                        <span>$ {price}</span>
                    </div>
                    <div className="stock">
                        <span>{stock} unidades restantes</span>

                    </div>
                </div>
            </div>
            <div className="actions">
                <div className="amount">
                    <button onClick={() => changeQuantity('-')}>-</button>
                    <input type="number" disabled value={amount}/>
                    <button onClick={() => changeQuantity('+')}>+</button>
                </div>
                <p>Subtotal: $ {amount * price}</p>
                <button className={'remove'} onClick={() => removeItem(id)}>Eliminar</button>
            </div>
        </div>
    )
}