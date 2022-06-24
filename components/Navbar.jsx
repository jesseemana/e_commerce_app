import React from "react";
import Link from "next/link";
import Cart from "./Cart";
import { AiOutlineShopping } from "react-icons/ai";
import { useGlobalContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, totalQuantity, setShowCart } = useGlobalContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Electronics Shop</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantity}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
