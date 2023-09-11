import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { AppContext } from "../../Context";
import "./styles.css";

function Payment() {
  const navigate = useNavigate();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      "AUk20rtcTFetXrqcVOTJkJk5s-A4lcs5wJfiw-KimKEXLHbDojRa41sL3PcofpKR-IidLXO9VV2EvEwe",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  
  const handlePaymentSuccess = (data) => {
    console.log("Payment data:", data); // Imprime toda la respuesta de PayPal
    if (data && data.paymentID) {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      console.log("Payment status:", data.status);
      addNewOrder(newOrder);
      navigate("/checkout/success");
    } else {
      // Manejar otros casos, por ejemplo, cuando no se completa el pago
      console.log("Payment not completed.");
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider
          // options={{
          //   "AUk20rtcTFetXrqcVOTJkJk5s-A4lcs5wJfiw-KimKEXLHbDojRa41sL3PcofpKR-IidLXO9VV2EvEwe":
          //     "test",
          // }}
          >
            <PayPalButtons
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal()}
              onClick={() => console.log("Start Payment")}
              onApprove={(data) => handlePaymentSuccess(data)}
              onError={(error) => console.log(error)}
              onCancel={(data) => console.log(data)}
              style={{ layout: "horizontal" }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
}

export { Payment };
