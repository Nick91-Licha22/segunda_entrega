import { useContext } from "react";
import cartContext from "../context/cartContext";
import { Link } from 'react-router-dom';
import "./CartContainer.css";

function CartContainer() {
  const { cartItems, removeItemCompleto, removeItem, calculateTotal, formatTotalWeight, finalizePurchase } = useContext(cartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu Carrito está vacío </h2>
        <p>¡Explora nuestras frutas y verduras frescas para llenarlo!</p>
        <Link to="/">
          <button className="btn-go-shopping">Volver a la Tienda</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito de Compras </h2>
      <div className="cart-items-list">
        {
          cartItems.map(item => (
            <div key={item.baseId} className="cart-item-card">
              <img width="100" src={item.img} alt={item.title} className="cart-item-img" />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>Peso Total: **{formatTotalWeight(item.count)}**</p> 
                <p>Precio (por Kilo): ${item.price}</p>
                <p className="item-subtotal">Subtotal: **$ {item.price * item.count}**</p>
              </div>
              <div className="item-actions">
                <button onClick={() => removeItem(item.baseId)} className="btn-remove-one">
                  -1 Kilo
                </button>
                <button onClick={() => removeItemCompleto(item.baseId)} className="btn-remove-all">
                  ❌ Quitar Producto
                </button>
              </div>
            </div>
          ))
        }
      </div>

      <div className="cart-summary">
        <h3>Total de la compra: **$ {calculateTotal()}**</h3>
        <button onClick={finalizePurchase} className="btn-checkout">Ir a Pagar</button>
      </div>
    </div>
  );
}

export default CartContainer;