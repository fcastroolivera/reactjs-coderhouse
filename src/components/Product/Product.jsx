import './Product.css'
import {Link} from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart.jsx";

export default function Product({ data }) {
    const {id, name, price, image} = data;
    return (
        <div className={'product'}>
            <div className="img">
                <img src={image} alt={`Image for Product ${name}`}/>
            </div>
            <div className="info">

                <Link to={`/product/${id}`}><h3>{name}</h3></Link>
                <div className="price">
                    <span>$ {price}</span>
                </div>
            </div>
            <div className="btn">
                <Link to={`/product/${id}`} className={'btn'}>Ver información</Link>
                <AddToCart data={data}/>
            </div>
        </div>
    )
}