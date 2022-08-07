import DishItem from "../DishItem/DishItem";
import "./DishContainer.css";

interface Props {
  container_id: string;
  data: [];
}

const DishContainer = ({ container_id, data }: Props) => {
  return (
    <div className="dishContainer w-1560" id={container_id}>
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
