import { createContext, useState } from "react";
import Swal from 'sweetalert2';
import { createOrder } from "../../data/firebase";

const cartContext = createContext();

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(newItem, isOfferCheckout = false) {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex(item => item.id === newItem.id);

    if (index !== -1) {
      newCartItems[index].count += newItem.count;
    } else {
      newCartItems.push(newItem);
    }
    setCartItems(newCartItems);

    if (!isOfferCheckout) {
      Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: 'success',
        title: `¡Agregaste ${newItem.count} Kilo(s) de ${newItem.title} al carrito! 🛒`,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#444',
        color: '#f5f5f5'
      });
    }
  }

  function removeItem(itemId) {
    let newCartItems = [...cartItems];
    const index = newCartItems.findIndex(item => item.id === itemId);

    if (index !== -1) {
      if (newCartItems[index].count > 1) {
        newCartItems[index].count -= 1;
      } else {
        newCartItems = newCartItems.filter(item => item.id !== itemId);
      }
      setCartItems(newCartItems);
    }
  }
  function removeItemCompleto(itemId) {
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
        const newCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(newCart);
        Swal.fire('Eliminado!', 'El producto ha sido quitado del carrito.', 'success');
      }
    });
  }

  function clearCart() {
    setCartItems([]);
  }

  async function finalizePurchase() {
    const { value: formValues } = await Swal.fire({
      title: 'Finalizar Compra',
      html:
        '<input id="swal-input-name" class="swal2-input" placeholder="Nombre completo">' +
        '<input id="swal-input-email" class="swal2-input" placeholder="Correo electrónico">' +
        '<input id="swal-input-phone" class="swal2-input" placeholder="Teléfono">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Confirmar Pedido',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        return {
          name: document.getElementById('swal-input-name').value,
          email: document.getElementById('swal-input-email').value,
          phone: document.getElementById('swal-input-phone').value
        };
      }
    });

    if (formValues) {
      if (!formValues.name || !formValues.email || !formValues.phone) {
        Swal.fire({ icon: 'error', title: 'Oops...', text: '¡Debes completar todos los campos para continuar!' });
        return;
      }

      const orderData = {
        buyer: formValues,
        items: cartItems.map(item => ({ id: item.id, title: item.title, price: item.price, quantity: item.count })),
        total: calculateTotal(),
        date: new Date()
      };

      try {
        const orderId = await createOrder(orderData);
        setCartItems([]);
        Swal.fire({
          title: '¡Pedido Confirmado!',
          html: `Tu orden ha sido creada exitosamente.<br><b>Tu ID de compra es:</b><br><code>${orderId}</code>`,
          icon: 'success',
          confirmButtonText: '¡Genial!'
        });
      } catch (error) {
        Swal.fire({ icon: 'error', title: 'Error al procesar el pedido', text: 'Hubo un problema al guardar tu orden. Por favor, intenta de nuevo.' });
      }
    }
  }

  function countItems() {
    return cartItems.reduce((acc, item) => acc + item.count, 0);
  }

  function calculateTotal() {
    return cartItems.reduce((acc, item) => acc + (item.price * item.count), 0);
  }

  return (
    <cartContext.Provider value={{ cartItems, addToCart, removeItemCompleto, countItems, calculateTotal, finalizePurchase, removeItem, clearCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;