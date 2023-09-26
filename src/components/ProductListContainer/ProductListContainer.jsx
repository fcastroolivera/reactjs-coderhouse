import './ProductListContainer.css'

export default function ProductListContainer({ children }) {
    return (
        <div className="productcontainer">
            {children}
        </div>
    )
}