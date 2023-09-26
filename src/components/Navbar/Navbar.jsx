import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget.jsx";
import NavItem from "../NavItem/NavItem.jsx";
import NavList from "../NavList/NavList.jsx";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <Link to={'/'}><h1>Nike</h1></Link>
                <NavList>
                    <NavItem text='Productos' to={'/'} />
                    <NavItem text='Categorías' to={'/categories'} />
                </NavList>
                <CartWidget />
            </div>
        </nav>
    );
}