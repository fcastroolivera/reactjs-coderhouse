import './ProductDetail.css';
import {Link} from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart.jsx";

export default function ProductDetail({params}) {

    const {title, image, description, category} = params;

   return (
       <div className="product-detail">
           <div className="product-detail__body">
               <div className="image">
                   <img src={image} alt="Product image"/>
               </div>
               <div className="info">
                   <span className="breadcrumbs"><Link to={'/'}>Home</Link> / <Link to={'/'}>{category}</Link></span>
                   <h2>{title}</h2>
                   <p className={'desc'}>{description}</p>
                   <div className="btn">
                       <AddToCart/>
                   </div>
               </div>
           </div>
       </div>
   )
}