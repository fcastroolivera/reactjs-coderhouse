import './App.css'
import Navigation from "./routes/Navigation.jsx";
import {CartContext} from "./context/CartContext.jsx";
import Loader from "./components/Loader/Loader.jsx";

function App() {

    return (
        <CartContext>
            <Loader />
            <Navigation />
        </CartContext>
    );
}

export default App