

const ItemList = ({ items }) => {



  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.title}</span>
              <span>
                - ₹
                {item.price
                  ? item.price
                  : item.defaultPrice}
              </span>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <img alt="Mens wear" src={item.image} className="p-2 mx-16 w-10 rounded-lg bg-black text-white shadow-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
