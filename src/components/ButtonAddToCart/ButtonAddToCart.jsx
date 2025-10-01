export default function ButtonAddToCart({ onAddToCart, text = "Agregar al Carrito" }) {
  
  return (
    <div className="button-cart">
      <button onClick={onAddToCart} className="add-to-cart-btn">
        {text}
      </button>
      
      <br />
      <small>Haz clic para añadir tu pedido.</small> 
    </div>
  );
}