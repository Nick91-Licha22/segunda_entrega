import { createContext, useState } from "react";
import Swal from 'sweetalert2'; 

const cartContext = createContext();

function getNumericWeight(quantityLabel) {
  if (quantityLabel.includes("1/2")) return 0.5;
  if (quantityLabel.includes("Kilo")) {
    const parts = quantityLabel.split(' ');
    return parseInt(parts[0]) || 1; 
  }
  return 1;
}

function formatTotalWeight(total) {
  if (total === 0.5) return "1/2 Kilo";
  if (total === 0) return "0 Kilos";

  const kilos = Math.floor(total);
  const media = total % 1;
  let result = [];
  
  if (kilos > 0) {
    result.push(`${kilos} Kilo${kilos > 1 ? 's' : ''}`);
  }
  if (media === 0.5) {
    result.push("1/2 Kilo");
  }
  
  return result.join(" y ");
}

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  
  function addToCart(newItem) {
    const newCartItems = structuredClone(cartItems);
    const index = cartItems.findIndex(item => item.baseId === newItem.baseId);
    const weightToAdd = getNumericWeight(newItem.quantityLabel);

    if (index !== -1) {
      newCartItems[index].count = parseFloat((newCartItems[index].count + weightToAdd).toFixed(1));
    } else {
      newCartItems.push({ 
          ...newItem, 
          count: weightToAdd,
          baseId: newItem.baseId 
      });
    }

    setCartItems(newCartItems);
    
    Swal.fire({
      toast: true,
      position: 'bottom-end',
      icon: 'success',
      title: `¡Agregaste ${newItem.quantityLabel} de ${newItem.title} al carrito! 🛒`,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#444',
      color: '#f5f5f5'
    });
  }

  function removeItem(baseId, removeWeight) {
    let newCartItems = structuredClone(cartItems);
    const index = newCartItems.findIndex(item => item.baseId === baseId);
    
    if (index === -1) return;
    
    if (newCartItems[index].count - removeWeight > 0) {
      newCartItems[index].count = parseFloat((newCartItems[index].count - removeWeight).toFixed(1)); 
    } else {
      newCartItems = newCartItems.filter(item => item.baseId !== baseId);
    }
    
    setCartItems(newCartItems);
  }

  function removeItemCompleto(baseId) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Eliminarás todas las unidades de este producto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const newCart = cartItems.filter(item => item.baseId !== baseId);
        setCartItems(newCart);
        Swal.fire(
          'Eliminado!',
          'El producto ha sido quitado del carrito.',
          'success'
        )
      }
    });
  }
  
  async function finalizePurchase() {
      const { value: email } = await Swal.fire({
          title: 'Finalizar Compra',
          text: 'Ingresa tu correo para confirmar el pedido:',
          input: 'email',
          inputLabel: 'Tu dirección de correo',
          inputPlaceholder: 'ejemplo@correo.com',
          showCancelButton: true,
          confirmButtonText: 'Confirmar Pedido',
          cancelButtonText: 'Cancelar'
      });

      if (email) {
          Swal.fire({
              title: '¡Pedido Confirmado!',
              html: `Enviaremos la confirmación a <b>${email}</b>.<br>Gracias por elegir S&N Verdulería.`,
              icon: 'success',
              confirmButtonText: 'Aceptar'
          });
          setCartItems([]);
      }
  }


  function countItems() {
    return cartItems.reduce((acc, item) => acc + item.count, 0);
  }
  
  function calculateTotal() {
    return cartItems.reduce((acc, item) => acc + (item.price * item.count), 0);
  }

  return (
    <cartContext.Provider value={{ 
        cartItems, 
        addToCart, 
        removeItemCompleto, 
        countItems, 
        calculateTotal, 
        formatTotalWeight, 
        finalizePurchase,
        removeItem: (baseId) => removeItem(baseId, 1) 
    }}>
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;