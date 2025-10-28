import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const { countItems } = useContext(cartContext);
  const totalItems = countItems();

  return (
    <Link to="/cart" className="cart-widget">
      <BsCart3 className="cart-icon" />
      <span className="cart-count">{totalItems}</span>
    </Link>
  );
}