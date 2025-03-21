import React from "react";
import "./addPizza.scss";
interface AddPizzaProps {
  totalPrice: number;
  getPizza: () => void;
  removeItem: () => void;
}

const AddPizza: React.FC<AddPizzaProps> = ({
  totalPrice,
  getPizza,
  removeItem,
}) => {
  return (
    <div className="add-pizza">
      <div className="add-pizza__body">
        <button className="add-pizza__minus" onClick={() => removeItem()}>
          <span></span>
        </button>
        <div className="add-pizza__count" onClick={() => getPizza()}>
          {totalPrice}
        </div>
        <button className="add-pizza__plus" onClick={() => getPizza()}>
          <span></span>
        </button>
      </div>
    </div>
  );
};
export default AddPizza;
