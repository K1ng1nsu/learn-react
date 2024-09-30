import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
const CartButton = (props) => {
  const dispatch = useDispatch();

  const quantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <button
      onClick={() => dispatch(cartActions.toggleCart())}
      className={classes.button}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
