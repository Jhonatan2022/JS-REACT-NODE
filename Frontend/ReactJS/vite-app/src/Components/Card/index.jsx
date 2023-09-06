import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";

function Card({ data }) {
  Card.propTypes = {
    data: PropTypes.object.isRequired,
  };

  const context = useContext(ShoppingCardContext);
  const [imgError, setImgError] = useState(false);

  const showProduct = (productToShow) => {
    context.openProductDetail();
    context.setProductToShow(productToShow);
    console.log(productToShow);
  };

  const handleImgError = () => {
    setImgError(true);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
        {imgError ? (
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
            alt={data.title}
          />
        ) : (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={data.images[0]}
            alt={data.title}
            onError={handleImgError}
          />
        )}
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => context.setCount(context.count + 1)}
        >
          <PlusIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
}

export { Card };
