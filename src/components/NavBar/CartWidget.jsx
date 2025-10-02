import { BsCart3 } from "react-icons/bs";
import { useContext } from "react"; 
import cartContext from "../context/cartContext";
export default function CartWidget() {
  const { countItems } = useContext(cartContext);
  const totalItems = countItems(); 

  return (
    <div className="cart-widget">
      <BsCart3 className="cart-icon" />
      <span className="cart-count">{totalItems}</span>
    </div>
  );
}
