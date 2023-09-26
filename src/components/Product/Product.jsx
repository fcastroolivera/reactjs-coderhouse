import './Product.css'
import {Link} from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart.jsx";

export default function Product({ data }) {
    const {id, title, price, image} = data;
    return (
        <div className={'product'}>
            <div className="img">
                <img src={image} alt={`Image for Product ${title}`}/>
            </div>
            <div className="info">

                <Link to={`/product/${id}`}><h3>{title}</h3></Link>
                <div className="price">
                    <span>$ {price}</span>
                </div>
            </div>
            <div className="btn">
                <Link to={`/product/${id}`} className={'btn'}>Ver información</Link>
                <AddToCart/>
            </div>
        </div>
    )
}