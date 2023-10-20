import {createContext, useState} from "react";

export const CartCtx = createContext()
export function CartContext({ children }) {
    const [cart, setCart] = useState([]);
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const addToCart = (productId) => {
        setCart([...cart, 'asdasd']);
    }

    return (
        <CartCtx.Provider value={{cart, setCart, productList, setProductList, isLoading, setIsLoading, addToCart}}>
            { children }
        </CartCtx.Provider>
    )
}