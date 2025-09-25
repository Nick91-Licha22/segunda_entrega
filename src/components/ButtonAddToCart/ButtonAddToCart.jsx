import { useState } from "react";

export default function ButtonAddToCart() {
  const [statusInCart, setStatusInCart] = useState("No agregado.");
  const [showRemoveButton, setShowRemoveButton] = useState(false);

  function handleAdd() {
    alert("¡Agregado al carrito!");
    setStatusInCart("Agregado al carrito. ✅");
    setShowRemoveButton(true);
  }

  function handleRemove() {
    alert("Eliminado del carrito.");
    setStatusInCart("No agregado.");
    setShowRemoveButton(false);
  }

  return (
    <div className="button-cart">
      <button onClick={handleAdd}>Agregar</button>
      {showRemoveButton && <button onClick={handleRemove}>Eliminar</button>}
      <br />
      <small>{statusInCart}</small>
    </div>
  );
}