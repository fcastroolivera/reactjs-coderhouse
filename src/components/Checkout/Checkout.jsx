import './Checkout.css';
import {useContext} from "react";
import {CartCtx} from "../../context/CartContext.jsx";
import {addDoc, collection} from 'firebase/firestore'
import {firestore} from "../../firestore/firestore.js";

export default function Checkout() {
    const {cart} = useContext(CartCtx);

    const buyer = {
    }

    const handleChange = e => {
        buyer[e.target.name] = e.target.value;
    }
    const saveOrder = () => {

        const order = {
            buyer,
            cart
        }

        addDoc(collection(firestore, "orders"), order).then(r => console.log('Documento guardado con el ID', r.id))
    }

    return (
        <div className="checkoutcontainer">
            <h2>Finalizar compra</h2>
            <div className="form">
                <form onSubmit={e => {
                    e.preventDefault();
                    saveOrder();
                }}>
                    <div className="formgroup">
                        <label htmlFor={'fullname'}>Nombre completo</label>
                        <input type={'text'} onChange={e => handleChange(e)} name={'fullname'} id={'fullname'} required/>
                    </div>
                    <div className="formgroup">
                        <label htmlFor={'email'}>Correo electrónico</label>
                        <input type={'email'} onChange={e => handleChange(e)} name={'email'} id={'email'} required/>
                    </div>
                    <input type="submit" value="Finalizar compra"/>
                </form>
            </div>
        </div>
    )
}