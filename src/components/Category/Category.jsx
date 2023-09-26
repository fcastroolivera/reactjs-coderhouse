import './Category.css'
import {Link} from "react-router-dom";

export default function Category({ data }) {
    return (
        <li className={'category'}><Link to={`/category/${data}`}>{data}</Link></li>
    )
}