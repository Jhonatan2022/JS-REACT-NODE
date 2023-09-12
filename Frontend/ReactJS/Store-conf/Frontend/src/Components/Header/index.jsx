import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import "./styles.css";

function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Conf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fa-solid fa-basket-shopping" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}

export { Header };
