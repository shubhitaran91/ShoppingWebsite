import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShoppingCard = (props) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const { resData } = props;

  const { image, description, price, title } = resData;

  const addToCart = (item) => {
    dispatch(addItems(item));
  };
return (
    <>
      <div
        data-testid="resCard"
        className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col"
      >
        <img className="rounded-lg" alt="res-logo" src={image} />

        <h3 className="font-bold py-4 text-lg">{title}</h3>
        <div className="flex flex-col gap-2">
          <h4>{isExpanded ? description : `${description.substring(0,100)}...`}<Link className="text-blue-500" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Read Less" : "Read More"}</Link></h4>

        </div>
        <div className="flex justify-between items-center mt-auto">
          <h4 className="text-lg font-semibold">${price}</h4>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg"
            onClick={() => addToCart(resData)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
  // return (
  //   <>
  //     <div
  //       data-testid="resCard"
  //       className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col"
  //     >
  //       <img className="rounded-lg" alt="res-logo" src={image} />

  //       <h3 className="font-bold py-4 text-lg">{title}</h3>
  //       <div>
  //         <h4>{description}</h4>
  //       </div>
  //       <div className="flex justify-end items-center">
  //         <h4 className="mr-4">${price}</h4>
  //         <button
  //           className="bg-blue-500 text-white p-2 rounded-lg"
  //           onClick={() => addToCart(resData)}
  //         >
  //           Add to cart
  //         </button>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default ShoppingCard;
