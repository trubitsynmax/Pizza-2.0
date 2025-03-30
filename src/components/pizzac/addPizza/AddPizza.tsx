import React from "react";
import "./addPizza.scss";

interface AddPizzaProps {
  getPizza: () => void;
  removeItem: () => void;
  label: number;
  getSizes: number;
  id: string;
  totalPrice: number;
}

const AddPizza: React.FC<AddPizzaProps> = ({ getPizza, removeItem }) => {
  return (
    <div className="add-pizza">
      <div className="add-pizza__body">
        <button className="add-pizza__minus" onClick={() => removeItem()}>
          <span></span>
        </button>
        <div className="add-pizza__count" onClick={() => getPizza()}>
          0
        </div>
        <button className="add-pizza__plus" onClick={() => getPizza()}>
          <span></span>
        </button>
      </div>
    </div>
  );
};
export default AddPizza;
