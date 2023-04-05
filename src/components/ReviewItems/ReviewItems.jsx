import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItems = ({ product, handleRemoveFromCart }) => {
  const { name, id, img, price, ratings, seller, quantity } = product;
  return (
    <div className='review-item'>
      <img src={img} alt='' />
      <div className='review-info'>
        <h6>{name}</h6>
        <p>
          Price: <span>$ {price}</span>
        </p>
        <p>
          Quantity: <span>{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItems;
