import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCardContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";

function MyOrders() {
    const context = useContext(ShoppingCardContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        // <Link key={index} to={`/my-orders/${order.id}`}>
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            date={order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export { MyOrders };
