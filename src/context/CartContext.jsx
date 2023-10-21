import {createContext, useState} from "react";
import {getItem} from "localforage";

export const CartCtx = createContext()

export function CartContext({children}) {
    const [cart, setCart] = useState([]);
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const addToCart = (productData) => {
        const {id, image, name, stock, price} = productData;
        const index = getItemIndex(id);
        if (index !== -1) {
            if (cart[index].stock > cart[index].amount) {
                cart[index].amount++
            }
        } else {
            setCart([...cart, {
                id,
                image,
                name,
                price,
                stock,
                amount: 1
            }]);
        }
    }

    const emptyCart = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        const index = getItemIndex(id);
        let cartCopy = [...cart];
        cartCopy.splice(index, 1);
        setCart(cartCopy);
    }

    const changeAmount = (id, value) => {
        const index = getItemIndex(id);
        let cartCopy = [...cart];
        cartCopy[index].amount = value;
        setCart(cartCopy);
    }

    const getItemIndex = (itemId) => {
        return cart.findIndex(object => {
            return object.id === itemId;
        })
    }

    return (
        <CartCtx.Provider value={{cart, emptyCart, removeItem, changeAmount, productList, setProductList, isLoading, setIsLoading, addToCart}}>
            {children}
        </CartCtx.Provider>
    )
}