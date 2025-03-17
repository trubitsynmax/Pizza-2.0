import React from "react";
import "./addPizza.scss";

const AddPizza = () => {
  return (
    <div className="add-pizza">
      <div className="container">
        <div className="add-pizza__body">
          <div className="add-pizza__minus">
            <span></span>
          </div>
          <div className="add-pizza__count">3</div>
          <div className="add-pizza__plus">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPizza;
