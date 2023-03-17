import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const isVisible = useSelector((store) => store.ui.cartIsVisible)
  const itempice = useSelector((state) => state.cart.items);
  console.log(itempice);


  return (
    isVisible && <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itempice.map((data) =>
          <CartItem key={data.id}
            item={{
              id:data.id,
              title: data.name,
              quantity: data.quantity,
              total: data.totalPrice,
              price: data.price
            }}
          />)
        }
      </ul>
    </Card>


  );
};

export default Cart;
