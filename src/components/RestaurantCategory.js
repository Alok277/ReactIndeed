import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex, setShowItem }) => {
  const handleClick = () => {
    setShowIndex();
    setShowItem();
  };

  console.log(data);
  return (
    <div>
      <div className="w-8/12 bg-gray-100 mx-auto shadow-lg my-4 p-2 ">
        <div
          className="flex justify-between my-4 cursor-pointer "
          onClick={handleClick}
        >
          <span className="font-bold text-sm ">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
