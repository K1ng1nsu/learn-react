import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const renderEl = isAuthenticated ? (
    <>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={() => dispatch(authActions.logout())}>Logout</button>
      </li>
    </>
  ) : (
    <>
      <li>
        <button onClick={() => dispatch(authActions.login())}>login</button>
      </li>
    </>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>{renderEl}</ul>
      </nav>
    </header>
  );
};

export default Header;
