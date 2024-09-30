import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";

const CartItem = (props) => {
  const { title, quantity, price } = props.item;

  const total = quantity * price;
  const dispatch = useDispatch();

  const decrementHandler = () => {
    if (quantity === 1) {
      dispatch(cartActions.deleteItem({ title }));
    } else {
      dispatch(cartActions.decrement({ title }));
    }
  };
  const incrementHandler = () => {
    dispatch(cartActions.increment({ title }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
