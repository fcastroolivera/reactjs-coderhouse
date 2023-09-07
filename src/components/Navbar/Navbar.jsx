import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget.jsx";
import NavItem from "../NavItem/NavItem.jsx";
import NavList from "../NavList/NavList.jsx";

export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <h1>MyFloraDNA</h1>
                <NavList>
                    <NavItem text='Destacados' />
                    <NavItem text='Productos' />
                </NavList>
                <CartWidget />
            </div>
        </nav>
    );
}