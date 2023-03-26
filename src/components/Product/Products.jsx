import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";

const Products = (props) => {
  const { name, id, img, price, ratings, seller } = props.product;
  const handleCart = props.handleCart;
  return (
    <div className='product'>
      <img src={img ? img : "no"} alt='' />
      <div className='product-info'>
        <h3>{name}</h3>
        <p className='price'>Price : $ {price}</p>
        <p className='manufacturer'>Manufacturer: {seller}</p>
        <p className='rating'>Rating: {ratings} star</p>
      </div>
      <button onClick={() => handleCart(props.product)} className='btn-cart'>
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Products;
