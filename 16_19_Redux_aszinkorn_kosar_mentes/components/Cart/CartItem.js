import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {counterActions} from '../../store/index';
import {cartActions} from '../../store/cart-slice';


const CartItem = (props) => {

  const dispatch = useDispatch();

  // const counter = useSelector((state) => state.counter.counter);

  const incrementhandler = () => {
    // dispatch(counterActions.increment());
    dispatch(cartActions.addItemToCart({
      id:id,
      title:title,
      price:price
    }));
  }

  const decrementHandler = () => {
    // dispatch(counterActions.decrement());
    dispatch(cartActions.removeItemFromCart(id));
  }

  const { title, quantity, total, price, id } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          {/* x <span>{counter}</span> */}
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
