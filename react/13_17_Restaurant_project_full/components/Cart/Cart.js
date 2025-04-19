import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Chackout from './Chackout';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  }




  const submitOrderHandler = async (userData) => {
    setSubmitting(true);
    await fetch('https://react-http-70f07-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,//ezaz összes adatom
        orderItems: cartCtx.items//ez amit rendelek
      })
    });
    setSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalAction =(
    <React.Fragment>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>

        {hasItems && <button className={classes.button} onClick={orderHandler}>
          Order
        </button>}
      </div>
    </React.Fragment >
    );

  const carthModulContent = (
    <React.Fragment>
      {cartItems}
      < div className={classes.total} >
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div >
      {isCheckout && <Chackout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {!isCheckout && modalAction}
    </React.Fragment>);

  const isSubmittingModalContet =
    <p>Sending order data...</p>
    const didSubmitModalContent = (
      <React.Fragment>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
      </React.Fragment>
    );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && carthModulContent}
      {isSubmitting && isSubmittingModalContet}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
