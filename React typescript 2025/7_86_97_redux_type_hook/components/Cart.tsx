import { createPortal } from 'react-dom';
import CartItems from './CartItems';
import React from 'react';

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  return createPortal(
    <>
      <div className="cart-backdrop" />
      {/* A dialog elem egy modális ablakot jelenít meg */}
      <dialog id="cart-modal" open>
        <h2>Your Cart</h2>
        <CartItems />
        <p id="cart-actions">
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById('modal')! // A cél elem, ahová a portált rendereljük
  );
}
