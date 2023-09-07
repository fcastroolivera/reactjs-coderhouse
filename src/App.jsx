import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
    return (
        <>
            <Navbar />
            <main className='container'>
                <ItemListContainer greeting='Saluditos' />
            </main>
        </>
    );
}

export default App