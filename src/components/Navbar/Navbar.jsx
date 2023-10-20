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
                    <NavItem text='Todos los productos' to={'/'} />
                    <NavItem text='Running' to={'/category/running'} />
                    <NavItem text='Football' to={'/category/football'} />
                    <NavItem text='Casual' to={'/category/casual'} />
                </NavList>
                <CartWidget />
            </div>
        </nav>
    );
}