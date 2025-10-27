import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/Navbar';
import CartContainer from './components/CartContainer/CartContainer';
import { CartProvider } from './components/context/cartContext';
import OffersView from './pages/OffersView.jsx';
import ContactView from './pages/ContactView.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a S&N Verdulería!" />} />
            <Route path="/category/:categParam" element={<ItemListContainer greeting="Productos" />} />
            <Route path="/detalle/:idParam" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/offers" element={<OffersView />} />
            <Route path="/contacto" element={<ContactView />} />
            <Route path="*" element={<h1>404: Página no encontrada</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

