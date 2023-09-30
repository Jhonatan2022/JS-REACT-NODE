import PropTypes from "prop-types";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function OrdersCard({ totalPrice, totalProducts, date }) {
  OrdersCard.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  };

  const formatOfDate = (date) => {
    const dateNum = new Date(date);
    const day = dateNum.getDate();
    const month = dateNum.getMonth();
    const year = dateNum.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">{formatOfDate(date)}</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
}

export { OrdersCard };
