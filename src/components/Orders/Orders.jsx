import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../Product/Products";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            handleCart={handleCart}
          ></Products>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
