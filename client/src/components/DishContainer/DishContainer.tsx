import DishItem from "../DishItem/DishItem";
import "./DishContainer.css";

const DishContainer = () => {
  return (
    <div className="dishContainer w-1560">
      <h1>Pizza</h1>
      <div className="dishContainer-list">
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
      </div>
    </div>
  );
};

export default DishContainer;
