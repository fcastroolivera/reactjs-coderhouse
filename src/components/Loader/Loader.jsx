import './Loader.css';
import {useContext} from "react";
import {CartCtx} from "../../context/CartContext.jsx";

export default function Loader() {
    const {isLoading} = useContext(CartCtx);

    return (
        <>
        {
            isLoading
            ? (<div className={'loader'}>
                <span></span>
            </div>)
            : ''
        }
        </>
    )
}