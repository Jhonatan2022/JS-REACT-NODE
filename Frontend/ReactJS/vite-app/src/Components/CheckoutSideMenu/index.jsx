import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCardContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../Utils";
import "./styles.css";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCardContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cardProducts.filter(
      (product) => product.id != id
    );
    context.setCardProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const oderToAdd = {
      // id: context.order.length + 1,
      date: Date.now(),
      products: context.cardProducts,
      totalProducts: context.cardProducts.length,
      totalPrice: totalPrice(context.cardProducts),
    };
    context.setOrder([...context.order, oderToAdd]);
    context.setCardProducts([]);
    context.closeCheckoutSideMenu();
    context.setSearchByTitle(null);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cardProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cardProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black py-3 text-white w-full rounded-lg mb-6"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };
