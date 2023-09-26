import './NavItem.css';
import {Link} from "react-router-dom";

export default function NavItem({ text, to }) {
    return (
        <li className={'nav-link'}>
            <Link to={to}>{text}</Link>
        </li>
    )
}