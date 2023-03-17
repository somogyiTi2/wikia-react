import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const itempice = useSelector((state) => state.cart.totalQuantity);


  const visiblehandler = () => {
    dispatch(uiActions.toggle());
  }


  return (
    <button onClick={visiblehandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itempice}</span>
    </button>
  );
};

export default CartButton;
