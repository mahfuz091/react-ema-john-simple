import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className='cart'>
      <div className='cart-info'>
        <h5>Order Summery</h5>
        <p>Selected items : {quantity}</p>
        <p>Total Price: $ {totalPrice} </p>
        <p>Total Shipping Charge: $ {totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        <button onClick={handleClearCart} className='btn-clear-cart'>
          <span>Clear Cart </span>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
