import { createContext, useState } from "react";

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
      newCartItems[index].count = newCartItems[index].count + weightToAdd;
    } else {
      newCartItems.push({ 
          ...newItem, 
          count: weightToAdd,
          baseId: newItem.baseId 
      });
    }

    setCartItems(newCartItems);
    alert(`¡Agregaste ${newItem.quantityLabel} de ${newItem.title} al carrito! 🛒`);
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
    const newCart = cartItems.filter(item => item.baseId !== baseId);
    setCartItems(newCart);
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
        removeItem: (baseId) => removeItem(baseId, 1) 
    }}>
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;