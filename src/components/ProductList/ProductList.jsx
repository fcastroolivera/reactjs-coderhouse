import './ProductList.css'
import Product from "../Product/Product.jsx";

export default function ProductList({productList}) {
    return (
        <div className="product-list">
            {
                productList.length > 0 ?
                    productList.map((el) => (
                        <Product key={el.id} data={el}/>
                    ))
                    : <p>No hay productos con esos parámetros.</p>
            }
        </div>
    )
}