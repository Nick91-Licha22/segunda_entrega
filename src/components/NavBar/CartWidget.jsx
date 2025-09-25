
import { BsCart3 } from "react-icons/bs";

export default function CartWidget() {
  return (
    <div className="cart-widget">
      <BsCart3 className="cart-icon" />
      <span className="cart-count">0</span>
    </div>
  );
}