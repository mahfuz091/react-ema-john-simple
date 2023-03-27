import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className='cart'>
      <div className='cart-info'>
        <h5>Order Summery</h5>
        <p>Selected items : {cart.length}</p>
        <p>Total Price: $ {totalPrice} </p>
        <p>Total Shipping Charge: $ {totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      </div>
    </div>
  );
};

export default Cart;
