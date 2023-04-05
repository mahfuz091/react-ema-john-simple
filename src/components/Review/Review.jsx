import React from 'react';
import Cart from '../Cart/Cart';
import './Review.css';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const products = useLoaderData
    console.log(products);
    return (
        <div className="review-container">
            <div>
                Orders
            </div>
            <div>
                <Cart cart={[]}></Cart>
            </div>

        </div>
    );
};

export default Review;