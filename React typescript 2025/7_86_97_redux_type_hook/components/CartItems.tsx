import React from "react";
import { useDispatch } from "react-redux"; // Import useDispatch for dispatching actions
import { useCartSelector } from "../store/hook"; // Hook to access cart state from Redux
import { CartItem } from "../store/cart-slice"; // Assuming the CartItem type is defined in your cart-slice
import { addToCart, removeFromCart } from "../store/cart-slice"; // Assuming these actions are defined in the cart-slice

export default function CartItems() {
  const dispatch = useDispatch(); // Hook to access the dispatch function
  const cartItems = useCartSelector(state => state.cart.items); // Get cart items from Redux state
  const totalPrice = cartItems.reduce((val, item) => val + item.price * item.quantity, 0); // Calculate total price
  const formattedTotalPrice = totalPrice.toFixed(2); // Format the total price to 2 decimals

  function handleAddToCart(item: CartItem) {
    // Dispatch action to increase quantity of an item in the cart
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(itemId: string) {
    // Dispatch action to decrease quantity or remove item from the cart
    dispatch(removeFromCart(itemId));
  }

  if (cartItems.length === 0) {
    return <p>No items in cart!</p>; // If no items in the cart, show a message
  }

  return (
    <div id="cart">
      <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`; // Format the item price to 2 decimals

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span> {/* Item title */}
                <span> ({formattedPrice})</span> {/* Item price */}
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button> {/* Button to remove item */}
                <span>{item.quantity}</span> {/* Item quantity */}
                <button onClick={() => handleAddToCart(item)}>+</button> {/* Button to add more items */}
              </div>
            </li>
          );
        })}
      </ul>

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}$</strong> {/* Show total price */}
      </p>
    </div>
  );
}
