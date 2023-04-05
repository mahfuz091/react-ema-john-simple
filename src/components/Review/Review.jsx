import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Review.css";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItems from "../ReviewItems/ReviewItems";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Review = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className='review-container'>
      <div>
        {cart.map((product) => (
          <ReviewItems
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItems>
        ))}
      </div>
      <div>
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link className='proceed-link' to='/checkout'>
            <button className='btn-proceed'>Proceed Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
