import React from "react";
// import {useDispatch} from 'react-redux'
import { addToCart } from "../store/cart-slice";
import { useCartDispatch } from "../store/hook";

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({
  id,
  image,
  title,
  price,
  description,
}: ProductProps) {
  // const dispatch = useDispatch();
  const dispatch = useCartDispatch();
  

  function handleAddToCart() {
    console.log("Add to cart clicked!");
    dispatch(addToCart({id,title,price}))
  }

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
