import { addItems } from "../utils/cartSlice";
import { RESLIST_URL } from "../utils/constants";
import { useDispatch } from 'react-redux';
const ItemsList = ({ items }) => {
  const dispatch=useDispatch()
  const addHandler=(item)=>{
    dispatch(addItems(item))
  }
  
  return (
    <div >
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="border-gray-300 border-b-2 w-full  text-left  flex justify-between"
        >
          <div className="w-9/12 ">
            <div className="py-2 flex flex-col font-semibold text-xs">
              <span>{item?.card?.info?.name}</span>
              <span> ₹ {item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-[8px]">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 h-40" onClick={()=>addHandler(item)} >
            <button className="absolute rounded-lg my-[135px] mx-10 px-4 bg-black text-white border-gray-400 border-[0.5px]  shadow-lg hover:bg-slate-500">
              Add +
            </button>
            <img
              src={RESLIST_URL + item?.card?.info?.imageId}
              className="w-full h-[90%] rounded-lg "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
