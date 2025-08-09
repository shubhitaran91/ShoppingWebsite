
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import Header from "./Header";
import ShoppingCard from "./ShoppingCard";



const Body = () => {

  const [listOfItems, setListOfItems] = useState([]);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://fakestoreapi.com/products"
    );

    const json = await data.json();
    setListOfItems(json);

  };

  //conditonal rendering

  return listOfItems.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    <Header />
    <div className="body">
      <div className="m-4 p-4 flex flex-row">
      
      </div>
      <div className="flex flex-wrap">
        {listOfItems.map((item, index) => (
          <ShoppingCard resData={item} key={index} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Body;
