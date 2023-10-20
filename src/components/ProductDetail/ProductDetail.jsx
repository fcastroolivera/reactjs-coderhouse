import './ProductDetail.css';
import {Link} from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart.jsx";

export default function ProductDetail({params}) {

    const {name, image, description, category, price, stock} = params;

   return (
       <div className="product-detail">
           <div className="product-detail__body">
               <div className="image">
                   <img src={image} alt="Product image"/>
               </div>
               <div className="info">
                   <span className="breadcrumbs"><Link to={'/'}>Home</Link> / <Link to={'/category/' + category}>{category}</Link></span>
                   <h2>{name}</h2>
                   <p className={'desc'}>{description}</p>
                   <div className="btn">
                       <AddToCart id={'1'}/>
                   </div>
               </div>
           </div>
       </div>
   )
}